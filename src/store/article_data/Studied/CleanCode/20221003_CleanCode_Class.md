# [CleanCode] 클래스

```
출처 : Clean Code - Robert C. Martin
```

이번 장에선 단순히 코드를 깨끗하게 만드는 것을 넘어 클래스를 깨끗하게 만드는 방법을 알아보겠습니다.



## 체계

> 클래스의 정의 : 변수 -> 함수

변수의 순서는 다음과 같습니다.

1. Public Static 상수
2. Private Static 변수
3. Private Instance 변수
4. (No Public)



변수 이후에 나오는 함수의 순서는 다음과 같습니다.

1. Public
2. Private (사용하는 공개함수 직후)



## 크기

> 작은 크기

TDD에서는 테스트 코드 작성이 실제 코드 작성에 선행되며 '테스트 - 리얼' 사이클을 유지하며 개발이 진행됩니다.

이 방식을 따르면 많은 테스트를 만들 수 있지만 너무 방대한 테스트 코드는 심각한 관리 문제가 발생할 수도 있습니다.



## 가독성

> 명료성, 단순성, 풍부한 표현으로 가독성 높이기

테스트 코드는 최소한의 표현으로 많은 것을 나타내야 합니다. 실제 코드와 마찬가지로, 테스트 코드도 코드를 보고 어떤 테스트인지 명료하게 알 수 있어야 합니다.

```java
public void testGetPageHierarchyAsXml() throws Exception {
  makePages("PageOne", "PageOne.ChildOne", "PageTwo");

  submitRequest("root", "type:pages");

  assertResponseIsXML();
  assertResponseContains(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>");
}

public void testSymbolicLinksAreNotInXmlPageHierarchy() throws Exception {
  WikiPage page = makePage("PageOne");
  makePages("PageOne.ChildOne", "PageTwo");

  addLinkTo(page, "PageTwo", "SymPage");

  submitRequest("root", "type:pages");

  assertResponseIsXML();
  assertResponseContains(
    "<name>PageOne</name>", "<name>PageTwo</name>", "<name>ChildOne</name>");
  assertResponseDoesNotContain("SymPage");
}

public void testGetDataAsXml() throws Exception {
  makePageWithContent("TestPageOne", "test page");

  submitRequest("TestPageOne", "type:data");

  assertResponseIsXML();
  assertResponseContains("test page", "<Test");
}
```

각 테스트는 세 파트로 구분할 수 있습니다.

1. 테스트 데이터를 생성하는 부분
2. 테스트 데이터를 사용해 테스트를 실행하는 부분
3. 테스트 결과를 확인하는 부분

깔끔하게 정리된 덕분에 우리는 위의 세 테스트가 "페이지를 만들고", "요청을 보내고", "응답 결과를 확인"하는 구조로 이루어졌다는 걸 쉽게 파악할 수 있습니다.



## 이중 표준

> 실제 코드와 다른 테스트 코드의 표준

테스트 코드의 표준이 실제 코드와 같을 필요는 없습니다. 실제 상황과 테스트 상황은 실행 환경이 다르기 때문입니다.



## 테스트 당 개념 하나

> 하나의 테스트는 하나의 개념을 확인

하나의 테스트는 하나의 개념을 확인하는 것이 좋습니다. 하나의 assert를 사용하는 것이 좋으며 필요하다면 여러 개를 사용해도 되지만 이 때도 하나의 개념을 테스트 한다는 원칙은 지켜져야 합니다.

만약 중복이 많다고 느껴지면 Template Method 패턴을 사용해서 제거할 수 있습니다.



## F.I.R.S.T

> Fast Independent Repeatable Self-Validating Timely

깨끗한 테스트 코드는 다음의 다섯 가지 규칙을 따릅니다.

- Fast (빠르게)
  - 테스트는 빨라야 합니다
- Independent (독립적으로)
  - 각 테스트는 서로 의존하면 안 됩니다
- Repeatable (반복가능하게)
  - 테스트는 항상 반복 가능해야 합니다
- Self-Validating (자가검증하는)
  - 테스트는 스스로 결과를 판단해 bool 값으로 성공/실패를 반환해야 합니다
- Timely (적시에)
  - 테스트 작성은 적시에, 즉 실제 코드 작성 전에 해야 합니다



## 결론

> 실제 코드만큼 중요하게 관리하기

- 테스트 코드의 품질은 실제 코드의 유연성, 유지보수성, 재사용성에 영향을 줌
- 깨끗하게 관리하고 가독성을 높이는 것이 중요
- 테스트 API를 구현해 도메인 특화 언어(DSL)을 만들면 테스트가 수월해짐