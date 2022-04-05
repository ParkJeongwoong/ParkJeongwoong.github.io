# [CleanCode] 함수

```
출처 : Clean Code - Robert C. Martin
```

좋은 코드는 글처럼 읽을 수 있는 코드입니다.

코드를 읽으며 변수명을, 함수를, 클래스를 통해 자연스럽게 내용을 파악할 수 있도록 만드는 것이 중요합니다.

클린코드의 3장은 좋은 코드를 만들기 위해 함수를 어떻게 만들어야 할지 다음과 같이 이야기합니다.



## 작게 만들기

> 최대한 짧게

함수는 작으면 작을수록 좋습니다.

함수 내에 "동작"이라고 불릴만한 것들은 전부 함수로 만들어 짧은 글처럼 읽을 수 있게 만들어야 합니다.

```java
public static String renderPageWithSetupsAndTeardowns(
        PageData pageData, boolean isSuite) throws Exception {
    if (isTestPage(pageData))
        includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
 }
```

위의 코드는 FitNesse를 이용한 테스트 관련 코드입니다. (Setup과 Teardown은 Fitness의 테스트에서 페이지의 Header와 Footer입니다)

모든 기능을 자연스럽게 읽을 수 있는 이름의 함수로 만들어두어 FitNesse에 대한 사전 지식이 있다면 동작 과정을 자연스레 파악할 수 있습니다.

> 테스트 페이지에 Setup 페이지와 Teardown 페이지를 추가하고 HTML로 렌더링



## 한 가지 일만 하기

> 추상화 수준 유지

함수는 한 번에 한 가지 일만 해야 합니다.

그리고 이를 위해서는 함수 내에서 추상화 수준이 바뀌면 안 됩니다. (함수 내부의 문장은 모두 동일한 추상화 수준을 유지)

### 사이드 이펙트 없애기

작은 동작이라도 합의되지 않은(함수의 이름만으로 유추하기 힘든) 기능이 들어가는 것은 오해를 만들 수 있습니다.



## 내려가기 규칙

> 아래로 갈수록 추상화 수준을 낮추기

위에서 아래로 갈수록 추상화 수준을 낮추는 것이 읽기 좋습니다.

즉 위쪽 함수들은 추상화 수준이 높은 함수로 배치하고 아래쪽 함수들은 추상화 수준이 낮은 함수로 배치하는 것이 가독성이 좋아집니다.



## Switch문

추상 팩토리와 다형성을 사용하여 Switch문이 장황해지는 것을 해결할 수 있다고 합니다.

> 이 부분은 조금 더 이해를 하고 정리하도록 하겠습니다.

### 자세한 설명

```java
public class Employee {
    String type;
}
```

```java
public Money calculatePay(Employee e) throws InvalidEmployeeType {
    switch (e.type) {
        case COMMISSIONED:
            return caclculateCommissionedPay(e);
        case HOURLY:
            return calculateHourlyPay(e);
        case SALARIED:
            return calculateSalariedPay(e);
        default:
            throw new InvalidEmployeeType(e.type);
    }
}
```

위의 코드의 문제점은 **Employee 클래스에 새로운 type이 추가될 때마다** 끝도없이 calculatePay 함수에 새로운 분기가 생기면서 함수가 늘어진다는 것입니다. calculatePay 뿐만 아니라 type별로 나눠서 계산해야하는 모든 함수의 switch문에 새로운 type 추가 작업이 필요합니다.



이 코드는 아래처럼 리팩토링할 수 있습니다.

```java
public abstract class Employee {
    public static boolean isPayday();
    public static Money calculatePay();
    public static void deliverPay(Money pay);
}

public class CommissionedEmployee extends Employee {
    public static boolean isPayday() {...};
    public static Money calculatePay() {...};
    public static void deliverPay(Money pay) {...};
}
public class HourlyEmployee extends Employee {
    public static boolean isPayday() {...};
    public static Money calculatePay() {...};
    public static void deliverPay(Money pay) {...};
}
public class SalariedEmployee extends Employee {
    public static boolean isPayday() {...};
    public static Money calculatePay() {...};
    public static void deliverPay(Money pay) {...};
}
```

```java
public interface EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;
}

public class EmployeeFactoryImpl implements EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
        switch (r.type) {
            case COMMISSIONED:
                return new CommissionedEmployee(r);
            case HOURLY:
                return new HourlyEmployee(r);
            case SALARIED:
                return new SalariedEmployee(r);
            default:
                throw new InvalidEmployeeType(r.type);
        }
    }
}
```

리팩토링이 된 함수에서는 switch문을 하나(makeEmployee)만 사용합니다. (이전에는 "isPayday", "calculatePay", "deliveryPay" 등 여러 곳에서 switch문 사용)

즉 **처음에 객체를 생성할 때만 switch문을 사용**함으로써 switch문에서 파생되는 문제를 줄일 수 있습니다.



## 서술적인 이름

> 길고 서술적인 이름

함수의 이름은 짧고 이해하기 어려운 것보다 길고 서술적인 내용을 담은 것이 좋습니다.



## 인수

> 인수는 최소화

함수의 인수는 최소화 시키는 것이 좋습니다. (0개가 최고)



**클래스를 활용**해서 인수를 클래스화 시키면 <u>메서드를 통해 인수에 접근</u>하거나 <u>함수의 인수로 클래스를 사용하는 방식</u>을 통해 함수의 인수를 줄일 수 있습니다.



## 예외 사용

> 오류보다는 예외

Try Catch가 들어있는 함수, Try에서 동작할 함수, Catch에서 동작할 함수를 분리합니다.

또한 오류보다는 예외 처리를 하는 것이 코드를 더 깔끔하게 만듭니다.



## 반복 지양

당연하지만, 반복을 지양합니다.



## 구조적 프로그래밍

[순차적 - 절차적(구조적) - 객체지향적]으로 이어지는 패러다임 중 구조적 프로그래밍의 법칙인 "함수의 return은 하나만", "break, continue는 금기"는 함수가 클 때 유용합니다.

따라서 함수를 작게 만들고자하는 방법론에서는 위의 규칙을 엄격히 지킬 필요가 없습니다.



## 깔끔한 함수를 위한 여정

처음부터 위의 규칙을 모두 지키는 코드를 만들기는 어렵습니다.

초안을 쓰고 문장을 다듬는 것처럼, 스케치를 한 뒤 선을 다듬는 것처럼 코드도 처음에는 길고 복잡하게 짜고 나중에 다듬는 방식으로 좋은 코드를 얻어낼 수 있습니다.
