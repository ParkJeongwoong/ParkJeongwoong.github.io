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











