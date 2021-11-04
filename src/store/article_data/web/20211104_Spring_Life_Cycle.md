# [Spring] 생명주기 (Life Cycle)

스프링에서 다룰 생성주기는 크게 [컨테이너]의 생명주기와 [빈 객체]의 생성주기로 나뉜다.



## 스프링 컨테이너 생명주기

**생성** - **설정** - **사용** - **소멸**



- 생성
  - GenericXmlApplicationContext 를 이용한 스프링 컨테이너 초기화(생성)

```java
GenericXmlApplicationContext ctx = new GenericXmlApplicationContext();
```



- 설정
  - load() 를 이용한 컨테이너 설정 (<u>refresh() 를 해야 반영</u>)

```java
ctx.load("classpath:applicationCTX.xml");
ctx.refresh();
```



- 사용
  - getBean() 을 이용한 Bean 객체 사용

```java
BookRegisterService bookRegisterService = ctx.getBean("bookRegisterService", BookRegisterService.class);

BookSearchService bookSearchService = ctx.getBean("bookSearchService", BookSearchService.class);
```



- 종료
  - close() 를 이용한 스프링 컨테이너 종료

```java
ctx.close();
```



### 컨테이너와 빈 객체를 동시에 생성하는 방법 (컨테이너, 빈 객체 동시 생성)

```java
GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:appCtx.xml");
```

이 방법을 사용하면 스프링 컨테이너를 생성하면서 빈 객체도 동시에 생성된다.





## Bean 객체 생명주기

**Bean 객체의 생명주기는 스프링 컨테이너의 생명주기와 동일**

컨테이너를 생성할 때 Bean이 생성되고, getBean()은 생성된 Bean 객체를 불러오는 것



### Bean 객체 생명주기 활용법

#### 1) `interface` 활용

- <interface> InitializingBean 에서 `afterPropertiesSet` 을 제공 (**bean 객체 생성 시 호출**)
- <interface> DisposableBean 에서 `destroy` 를 제공 (**bean 객체 소멸 시 호출**)

```java
public class BookRegisterService implements InitializingBean, DisposableBean {
    @Autowired
    private	BookDao bookDao;
    
    public BookRegisterService() {}
    
    public void register(Book book) {
        bookDao.insert(book);
    }    
    
    // 빈 객체 생성 시 호출
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("BookRegisterService 빈 객체 생성 단계")
    }
    
    // 빈 객체 소멸 시 호출
    public void destroy() throws Exception {
        System.out.println("BookRegisterService 빈 객체 소멸 단계")
    }
    
}
```

```java
public static void main(String[] args) {
    GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(); // (1) 컨테이너생성
    ctx.load("classpath:applicationCTX.xml"); // (2) 로드
    ctx.refresh(); // (3) 빈 생성(즉, 빈이 초기화 과정에서 호출된다. interface:InitializingBean, method:afterPropertiesSet() )
    ctx.close(); // (4) 빈 소멸(빈 소멸 과정에서 생성 된다. interface:DisposableBean , method:destroy() )
}
```



#### 2) `init-method`, `destroy-method` 속성 활용

```xml
<bean id="bookRegisterService" class="com.brms.book.service.BookRegisterService"
      	init-method="initMethod" destroy-method="destroyMethod" />
```

```java
public class BookRegisterService {
    @Autowired
    private	BookDao bookDao;
    
    public BookRegisterService() {}
    
    public void register(Book book) {
        bookDao.insert(book);
    }
    
    // 빈 객체 생성 시 호출
    public void initMethod() {
        System.out.println("BookRegisterService 빈 객체 생성 단계")
    }
    
    // 빈 객체 소멸 시 호출
    public void destroyMethod() {
        System.out.println("BookRegisterService 빈 객체 소멸 단계")
    }
}
```



#### 3) `@PostConstruct`, `@PreDestroy` 어노테이션 사용

스프링 2.5이 후부터 사용 가능

```java
public class BookRegisterService {
    @Autowired
    private	BookDao bookDao;
    
    public BookRegisterService() {}
    
    public void register(Book book) {
        bookDao.insert(book);
    }
    
    // 빈 객체 생성 시 호출
    @PostConstruct
    public void initMethod() {
        System.out.println("BookRegisterService 빈 객체 생성 단계")
    }
    
    // 빈 객체 소멸 시 호출
    @PreDestroy
    public void destroyMethod() {
        System.out.println("BookRegisterService 빈 객체 소멸 단계")
    }
}
```





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌

https://bkjeon1614.tistory.com/482

https://request-response.tistory.com/11

https://haruhiism.tistory.com/186