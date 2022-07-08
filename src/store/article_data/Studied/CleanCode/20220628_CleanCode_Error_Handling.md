# [CleanCode] 오류 처리

```
출처 : Clean Code - Robert C. Martin
```

에러를 처리할 때도 깨끗한 코드는 중요합니다.
정리되지 않은 에러 처리 코드는 코드가 어떤 일을 하는지 파악하기 어렵게 만듭니다.

오늘은 비즈니스 논리가 흐려지지 않도록 깨끗한 오류 처리 방법을 알아보겠습니다.



## 예외 사용

> 에러가 아니라 예외 사용하기

많이들 사용하는 `try-catch`를 통한 예외처리를 사용하는 것은 코드를 깔끔하게 만듭니다.

클린코드에서는 `에러코드`를 반환하는 방법 대신 `예외처리`를 할 것을 권장합니다.

에러는 바로 확인해야 하기 때문에 **호출 코드가 복잡해지고** 개발을 하다보면 **오류 확인을 잊어버리기 쉽기 때문**입니다.

```java
 // 동작
Handler handler = exampleMethod1();
// 에러 확인
if (handler != Handler.INVALID) {
	// 동작
	Recorder recorder = exampleMethod2();
	// 에러 확인
	if (recorder.getStatus() != SUSPENDED) {
		<<nextStep...>>
	} else {
		<<errorHandling...>>
	}
} else {
	<<errorHandling...>>
}
```

무엇보다도 이렇게 조건문을 사용해서 에러를 확인하는 일은 **코드를 지저분하게 만듭니다.**

반면 `try-catch`를 이용해 정상 동작과 예외 동작을 구분하는 것은 시각적으로 정리된 느낌을 주고 비즈니스 로직이 무엇인지 파악하기 쉽게 만듭니다.

```java
try {
	<<businessLogic...>>
}
catch {
	<<errorHandling...>>
}
```



## Try-Catch-Finally

> 항상 try-catch-finally문부터 작성

TDD를 사용해,

1. 예외를 일으키는 테스트 케이스 작성
2. try-catch 구조의 코드 작성
3. 예외를 세분화

하는 식으로 코드를 작성하는 방법이 권장됩니다.

1. 단위 테스트와 베이스 코드

```java
@Test(expected = StorageException.class)
public void retrieveSectionShouldThrowOnInvalidFileName() {
	sectionStore.retrieveSection("invalid - file");
}
```

```java
public List<RecordedGrip> retrieveSection(String sectionName) {
	// 실제로 구현할 때까지 비어 있는 더미를 반환
	return new ArrayList<RecordedGrip>();
}
```

2. try-catch 구조

```java
public List<RecordedGrip> retrieveSection(String sectionName) {
	try {
		FileInputStream stream = new FileInputStream(sectionName);
	} catch (Exception e) {
		throw new StorageException("retrieval error", e);
	}
	return new ArrayList<RecordedGrip>();
}
```

3. 예외 세분화

```java
public List<RecordedGrip> retrieveSection(String sectionName) {
  try{
    FileInputStream stream = new FileInputStream(sectionName);
    stream.close();
  } catch (FileNotFoundException e) {
    throw new StorageException("retrieval error", e);
  }
  return new ArrayList<RecordedGrip>();
}
```



## Unchecked Exception 사용

> Checked Exception 대신 Unchecked Exception 사용


||Checked EXception|Unchecked Exception|
|---|:---:|:---:|
|확인 시점|컴파일|런타임|
|처리 여부|`반드시 처리해야 함`|`꼭 처리하지 않아도 됨`|
|트랜잭션 처리|No Rollback|Rollback|
|예시|IOException, ClassNotFoundException|NullPointerException, ArithmeticException|


**Checked Exception은 OCP(Open-Close Principle)를 위반**합니다.

Checked Exceoption은 반드시 처리해야 하기 때문에, 만약 상위 계층으로 예외를 던져야 하는 상황이 생기면 Exception이 지나가는 매 계층마다 해당 예외를 정의해야 하는 문제가 생깁니다.
(즉, 하위 단계에서 새로운 예외가 발생하면 연관된 상위 단계를 모두 수정해야 합니다.)

```java
// method2에서 NotPrintException을 던졌기 때문에 상위 계층인 method1에서도 해당 예외를 추가해야 합니다.
public void method1(boolean flag) throws NotPrintException {
	method2(flag);
}

public void method2(boolean flag) throws NotPrintException {
	if (flag)
		System.out.println("Hi");
	else
		throw new NotPrintException();
}
```

필요하다면 사용해야겠지만 가능하다면 예외는 Unchecked Exception을 사용하는 것이 좋습니다.



## 예외에 의미 제공

> 오류와 관련된 정보 담기

예외에 의미를 담아 발생 원인과 위치를 파악하는데 도움을 줘야 합니다.



## 깔끔하게 오류 잡아내기

> 클래스를 활용하여 깔끔하게 오류 처리하기

오류를 깔끔하게 잡아내는 건 무척 중요합니다.



```java
ACMEPort port = new ACMEPort(12);

try {
	port.open();
} catch (DeviceResponseException e) {
	reportPortError(e);
	logger.log("Device response exception", e);
} catch (ATM1212UnlockedException e) {
	reportPortError(e);
	logger.log("Unlock exception", e);
} catch (GMXError e) {
	reportPortError(e);
	logger.log("Device response exception");
} finally {
	...
}
```

위의 코드는 분류도 제대로 되지 않았고 로그만 찍히는 예외 처리 코드입니다.

```java
LocalPort port = new LocalPort(12);
try {
	port.open();
} catch (PortDeviceFilure e) {
	reportError(e);
	logger.log(e.getMessage( ), e);
} finally {
	...
}
```

```java
// LocalPort 클래스 (Wrapper Class)
public class LocalPort {
	private ACMEPort innerPort;
	public LocalPort(int portNumber) {
		innerPort = new ACMEPort(portNumber);
	}
	
	public void open( ) {
		try {
			innerPort.open();
		} catch (DeviceResponseException e) {
			throw new PortDeviceFailure(e);
		} catch (ATM1212UnlockedException e) {
			throw new PortDeviceFailure(e);
		} catch (GMXError e) {
			throw new PortDeviceFailure(e);
		} 
	}
	...
}
```

ACMEPort 클래스를 감싸는 Wrapper 클래스(LocalPort 클래스)를 이용해서 port open 중 발생하는 여러 에러를 `PortDeviceFilure` 하나로 처리했습니다.

외부 API를 감싸면,
1. 에러 처리가 간결해지고
2. 외부 라이브러리와 프로그램 사이의 의존성이 줄어들고
3. 테스트가 쉬워지고
4. 외부 API의 설계 방식에 의존하지 않아도 됩니다.



## 정상 흐름을 정의

> 예외 처리가 비즈니스 로직을 해지치 않기

깔끔한 예외 처리도 때로는 없는 게 나을 때가 있습니다.

```java
try {
	MealExpenses expenses = expenseReportDAO.getMeals(employee.getID());
	m_total += expenses.getTotal();
} catch (MealExpensesNotFound e) {
	m_total += getMealPerDiem();
}
```

청구될 식비, MealExpenses 객체가 없다면 Error를 발생시키면서 기본 식비를 더하는 코드입니다.
이런 예외 처리는 논리를 흐리게 만듭니다.

이럴 때는 애초에 이런 특수한 상황(에러 상황)을 만들지 않는 게 더 적합합니다.

```java
MealExpenses expenses = expenseReportDAO.getMeals(employee.getID());
m_total += expenses.getTotal();
```

expenseReportDAO.getMeals()가 항상 MealExpenses를 반환하게 하고 만약 식비가 없다면 기본 식비를 getTotal()에서 반환하도록 만들면 특수한 상황(에러 상황)이 생기지 않습니다.



## null을 반환하거나 전달하지 않기

> null 대신 예외나 특수 사례 객체 반환
> 
> 이보다 최악은 인수로 null을 전달하는 것

메서드의 입출력(인수&반환)에 null을 사용하는 건 null 확인을 매번 해야하는 리스크를 만듭니다.

또 null 확인을 완벽하게 했다면 null 확인이 너무 많아 코드가 지저분해집니다.