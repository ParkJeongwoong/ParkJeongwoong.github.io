# [CleanCode] 경계

```
출처 : Clean Code - Robert C. Martin
```

소프트웨어를 개발할 때 외부 소스를 활용하는 것은 일반적입니다. 이번 장에선 외부 소스를 깔끔하게 통합하는, 즉 소프트웨어 간의 경계를 처리하는 기법에 대해 알아보겠습니다.



## 외부 코드를 "사용하기"

> 자신의 용도에 맞춰 사용하기

일반적으로 패키지/프레임워크 제공자는 범용성을 중요시 여깁니다. 반면에 사용자는 자신의 요구사항에 적합한 인터페이스가 필요합니다.

java에서 제공하는 `java.util.Map`은 유연하게 사용 가능할 수 있지만 이는 사용자 입장에서 적절하지 않은 상황을 만듭니다.

먼저 Type을 특정하지 않는다는 것입니다.

이 경우 **제너릭을 사용**하여 용도에 맞게 사용할 수 있습니다.

```java
Map<String, Sensor> sensors = new HashMap<Sensor>();
Sensor s = sensors.get(sensorId);
```

하짐나 이 경우에도 사용자는 과도하게 많은 HashMap의 기능을 제공받는 문제가 있습니다. 데이터 제거가 필요 없는 상황에서도 Map은 clear() 메서드를 통해 내용을 지울 수 있게 만듭니다.

여기서 java에서 제공하는 <u>Map은 경계 인터페이스</u>이고 이런 경계 인터페이스를 깔끔하게 사용하는 방법은 **사용하는 클래스 안으로 경계 인터페이스를 숨김**으로써 실현할 수 있습니다.

```java
public class Sensors {
	private Map sensors = new HashMap();

	public Sensor getId(String id) {
		return (Sensor) sensors.get(id);
	}
}
```

그렇다고 모든 Map 클래스를 캡슐화할 필요는 없습니다.

경계 인터페이스의 캡슐화는 Map 객체를 다른 곳에서 사용하게 둠으로써 문제가 생기는 것을 막기 위함이므로 Map 인스턴스를 외부에 유출하지 않는다면 사용해도 괜찮습니다.



## 학습 테스트

> 외부 코드를 익히기 위한 테스트 케이스

외부 코드를 익히고 적용하는 것은 어렵습니다. 보다 나은 학습을 위한 `학습 테스트`는 **프로그램에서 사용하려는 방식대로 외부 API를 호출하고 통제된 환경에서 API를 확인하는 테스트**입니다. 즉 API를 사용하는 목적에 초점을 맞춥니다.

### log4j 학습 테스트

아파치의 log4j 패키지를 사용해 로깅을 하려고 가정하고 학습 테스트를 하는 과정은 다음과 같습니다.

1. 첫 번째 테스트 케이스 작성

```java
@Test
public void testLogCreate() {
	Logger logger = Logger.getLogger("MyLogger");
	logger.info("hello");
}
```

Appender가 필요하다는 오류가 발생합니다.

2. Appender 추가

```java
@Test
public void testAddAppender() {
	Logger logger = Logger.getLogger("MyLogger");
	ConsoleAppender appender = newConsoleAppender();
	logger.addAppender(appender);
	logger.info("hello");
}
```

출력 Stream이 없다는 걸 파악하고 추가합니다.

3. 출력 Stream 추가

```java
@Test
public void testAddAppender() {
	Logger logger = Logger.getLogger("MyLogger");
	logger.removeAppAppenders();
	logger.addAppender(new ConsoleAppender(
		new PatterLayout("%p %t %m%n"), ConsoleAppender.SYSTEM_OUT));
	logger.info("hello");
}
```

PatterLayout을 제거하니 에러가 뜨고 ConsoleAppender.SYSTEM_OUT을 제거하니 문제가 없습니다.

4. Log4j 최종 학습 테스트

```java
public class LogTest {
  private Logger logger;

  @Before
  public void initialize() {
    logger = Logger.getLogger("logger");
    logger.removeAllAppenders();
    Logger.getRootLogger().removeAllAppenders();
  }

  @Test
  public void basicLogger() {
    BasicConfigurator.configure();
    logger.info("basicLogger");
  }

  @Test
  public void addAppenderWithStream() {
    logger.addAppender(new ConsoleAppender(
			new PatternLayout("%p %t %m%n"), ConsoleAppender.SYSTEM_OUT));
    logger.info("addAppenderWithStream");
  }

  @Test
  public void addAppenderWithoutStream() {
    logger.addAppender(new ConsoleAppender(
			new PatternLayout("%p %t %m%n")));
    logger.info("addAppenderWithoutStream");
  }
}
```

log4j의 동작 방식을 이해하고 만든 최종 학습 테스트입니다.



## 미구현 코드 사용

> Checked Exception 대신 Unchecked Exception 사용


아직 설계되지 않은 외부 API를 사용해야 할 때가 있습니다. (협업하는 다른 팀의 구현이 늦어질 때)

이 경우 구현을 미루고 개발을 진행하기 위해 자체적인 인터페이스를 정의합니다.

인터페이스를 구현하는 것은 통제권을 가지는 장점이 있습니다.

가독성도 높아지고 코드의 의도도 분명해집니다.

이후 외부 API의 개발이 완료되면 `Adapter`를 구현해 인터페이스에 맞게 적용합니다.

### 구조

`인터페이스` = Fake API + Adapter

Adapter : Fake API와 추후 개발될 Real API를 이어주는 도구 (외부 API 변경 시 이 부분만 수정)



## 결론

> 깨끗한 경계 만들기

- 통제가 가능한 자신의 코드에 의존 > 통제가 불가능한 외부 패키지에 의존
- 외부 코드에 자신의 소프트웨어가 휘둘리는 것을 조심 (가능한 외부 패키지 포출을 줄이기)
- 새로운 클래스로 경계 인터페이스를 감싸거나 Adapter 패턴을 사용해서 자신의 인터페이스로 변환
  - 가독성 향상
  - 경계 인터페이스의 일관성 향상
  - 외부 패키지의 변경점에 대한 영향 감소