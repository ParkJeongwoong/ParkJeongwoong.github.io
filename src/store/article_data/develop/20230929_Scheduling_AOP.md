# [Spring Boot] 멀티 서버 스케쥴링, AOP

Blue Green 무중단 배포를 사용한 뒤로 2개의 서버가 동시에 구동하게 되면서 @Scheduled 를 사용한 스케쥴 작업이 동시에 동작하는 문제가 생겼다. 크리티컬한 문제는 생기지 않았지만, 예약 데이터(Reservation)를 바탕으로 만드는 예약 관리 정보(AdminManageInfo)가 2개 씩 만들어지는  문제가 생겼다.

이 문제를 해결하기 위한 여러 옵션을 조금 찾아봤다.

- Redis를 이용한 기능 직접 구현

- ShedLock : DB에 스케쥴 작업에 대한 정보를 저장하고 이를 통해 스케쥴을 관리하는 방식이다.
- Quartz



## 직접 구현

1. 작업을 시작하기 전, Redis에서 작업 명을 key로 조회
2. 캐시 정보가 있으면 skip
3. 없으면 {작업 명과 서버 profile 명}을 {key, value}로 넣고 스케쥴 실행
4. 작업을 완료하기 전 작업 명을 key로 다시 캐시 조회
5. 캐시 정보가 없거나 서버 profile 명이 일치하지 않으면 rollback
6. 일치하면 스케쥴 작업 완료

이런 flow로 구현을 하려고 했다.

그러려면 스케쥴 작업 앞 뒤로 (1) ~ (3) 작업과 (4) ~ (6) 작업을 공통으로 처리 해야 하므로 AOP를 활용하려고 생각했다.



### ShedLock, Quartz

다른 방법을 찾아보니 ShedLock과 Quartz를 사용하면 클러스터 환경에서 하나의 스케쥴만 실행할 수 있다는 걸 알았다.

Quartz는 클러스터에 등록 노드들 중 하나를 Quartz가 골라서 수행시키는 방식이고

ShedLock은 내가 Redis로 구현하려고 했던 것처럼 DB를 이용해 스케쥴 실행 전 Lock을 걸고 수행하는 방식이었다.



빠른 구현을 위해 우선 간단하게 Redis를 이용한 방식으로 구현하고, Quartz Job Scheduler를 사용하는 것으로 변경하기로 했다.



## AOP

Redis를 이용한 Schedule Lock을 구현하고 나서 이를 스케쥴 메서드에 공통적으로 적용하기 위해 AOP를 사용했다.



다음은 AOP와 관련된 기본적인 개념이다.

- Aspect : 정의된 모듈화된 관심사 (Advice + Point cut)
- Advice : Aspect의 자세한 기능 구현
- Advisor : Advice + Point cut 로 이뤄져 <u>Aspect를 구체적으로 언제 어떻게 적용할 결정</u>
- Target : Advice의 대상
- Joint Point : Advice 적용 위치 (Spring AOP는 프록시 패턴을 쓰므로 항상 메서드 실행 시)
- Point cut : Joint Point 중 Advice가 적용되는 위치를 결정
  - @Before : Joint Point 실행 전 동작
  - @AfterReturning : 메서드의 정상 상황에서 동작 
  - @AfterThrowing : 메서드의 예외 상황에서 동작
  - @After : Joint Point 이후 정상, 예외 여부와 무관하게 동작
  - @Around : 위 4가지 모두 포함 (모든 수정 가능)



### 적용

- 의존성을 추가한다

  ```java
  implementation('org.springframework.boot:spring-boot-starter-aop')
  ```

  - 이 의존성을 추가하면 **자동 프록시 생성기(AnnotationAwareAspectJAutoProxyCreator)** 가 스프링 어플리케이션 시작 시, @Aspect 빈을 읽고 Advisor를 생성한다.

  - 이후 Advisor와 클래스, 메서드 정보를 매칭하면서 프록시를 적용할 대상 여부를 판단한다.
  - 프록시 적용 대상이라면 프록시를 생성하고 이를 빈 저장소에 등록하고, 대상이 아니라면 그냥 빈을 저장소에 등록한다.

- Aspect, Point cut 작성

  - Around

    ```java
    @Slf4j
    @Aspect
    public class AspectV6Advice {
    
        @Around("execution(* com.yeoyeo.application.common..*(..))")
        public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {
            try {
                // @Before
                ...
    
                // Target 메서드 호출
                Object result = joinPoint.proceed();
    
                // @AfterReturning
                ...
    
                // 값 반환
                return result;
            } catch (Exception e) {
                // @AfterThrowing
                ...
                throw e;
            } finally {
                //@ After
                ...
            }
        }
    }
    ```

  - Before

    ```java
    @Before("execution(* com.yeoyeo.application.common..*(..))")
    public void doBefore(JoinPoint joinPoint) {
        log.info("[before] {}", joinPoint.getSignature());
    }
    ```

  - AfterReturning

    ```java
    @AfterReturning(value = "execution(* com.yeoyeo.application.common..*(..))", returning = "result")
    public void doReturn(JoinPoint joinPoint, Object result) {
        log.info("[return] {} return={}", joinPoint.getSignature(), result);
    }
    ```

  - AfterThrowing

    ```java
    @AfterThrowing(value = "execution(* com.yeoyeo.application.common..*(..))", throwing = "ex")
    public void doThrowing(JoinPoint joinPoint, Exception ex) {
        log.info("[ex] {} message={}", joinPoint.getSignature(), ex.getMessage());
    }
    ```

  - After

    ```java
    @After(value = "execution(* com.yeoyeo.application.common..*(..))")
    public void doAfter(JoinPoint joinPoint) {
        log.info("[after]");
    }
    ```

  - PointCut을 &&와 ||로 연결하여 사용 가능

    ```java
    @Slf4j
    @Aspect
    @Component
    public class LoggingAspect {
    
        // Pointcut
        @Pointcut("execution(* com.yeoyeo.adapter.controller..*.*(..))")
        private void controllerPointcut() {}
        @Pointcut("execution(* com.yeoyeo.application..*Service.*(..))")
        private void servicePointcut() {}
    
    
        // Aspect
        @Before("controllerPointcut() || servicePointcut()")
        public void controllerServiceLogging(JoinPoint joinPoint) {
            ...
        }
    
    }
    ```


### PointCut

- execution(접근제어자 반환타입* 선언타입 메서드이름* 예외)

  - *이 쳐진 건 필수
  - *를 사용하면 모든 타입 허용

- @annotation

  ```java
  package com.yeoyeo.aop.annotation;
  @Target(ElementType.METHOD)
  @Retention(RetentionPolicy.RUNTIME)
  public @interface MethodAop {
      String value();
  }
  ```

  ```java
  @Around("@annotation(com.yeoyeo.aop.annotation.MethodAop)")
  public void aopAnnotation(ProceedingJoinPoint joinPoint) throws Throwable {
      // 생략
  }
  ```

  