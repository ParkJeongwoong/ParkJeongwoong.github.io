# [CleanCode] 형식 (Formatting)

```
출처 : Clean Code - Robert C. Martin
```

코드가 깔끔하게 보인다는 것은 가독성이 높다는 의미입니다.

오늘은 원활한 소통을 위한 코드 형식을 이야기하고자 합니다.

## 파일 형식

### 코드의 크기

> 되도록이면 작게

엄격한 규칙은 아니지만 되도록이면 작고 짧은 코드가 좋습니다.

작은 파일로도 충분히 큰 시스템을 만들 수 있으며 일반적으로 코드가 짧을수록 이해하기 좋습니다.



### 신문 기사

> 신문 기사의 형식을 취하기

- 최상단 - 기사를 요약하는 표제

- 첫 문단 - 전체 기사 내용을 요약
- 중하단 - 기사의 세부 내용

좋은 기사는 읽기 좋은 형식을 취하고 있습니다.

위의 형식을 코드에 적용시킨다면 아래처럼 생각할 수 있습니다.

- 이름 - 간단하면서 코드를 잘 설명하는 이름
- 첫 부분 - 고차원의 개념과 알고리즘
- 중단 - 세부 내용
- 하단 - 저차원의 함수와 코드



### 개념 분리

> 빈 줄을 이용해서 개념을 분리하기

연결된 한 묶음의 코드는 하나의 생각을 표현합니다.

빈 행으로 코드를 구분짓는 것은 한 개념이 끝나고 새로운 개념이 시작된다는 것을 알려주는 신호입니다.



## 세로 형식

### 세로 밀집

> 연관된 코드는 세로로 가까이 붙이기

```java
public class ReporterConfig {
    private String m_className;
    
    
    
    
    
    
    
    
    
    private List<Property> m_properties = new ArrayList<Property>();
    public void addProperty(Property property) {
        m_properties.add(property);
    }
}
```

이렇게 연관된 속성과 메서드를 불필요하게 떨어뜨려놓은 코드는 한 눈에 들어오지 않습니다.



### 수직 거리

> 밀접한 개념은 세로로 붙이기

세로 밀집과 비슷한 개념입니다. 서로 비슷한 개념을 담은 함수나 코드는 붙여놓는 것이 이해하기 좋습니다.

동작 방식을 이해하려고 위 아래로 불필요하게 화면을 움직이는 것은 혼란을 가중시킵니다.



### 종속 함수

> 종속 관계의 함수는 가까이 배치

위의 항목들과 비슷한 개념입니다.

한 함수가 다른 함수를 호출한다면 두 함수는 서로 연관된 함수이므로 읽기 쉽게 가까이 배치합니다.



### 개념적 유사성

> 친화도가 높은 코드끼리 가까이 배치

친화도는 다음의 요인들로 높아집니다.

1. 함수 내부에서 함수를 호출하면서 생기는 **종속성**
2. 인자로 쓰이는 **변수**와 이를 사용하는 **함수**
3. **비슷한 동작을 수행**하는 함수



### 변수 선언 위치

> 변수는 사용하는 위치와 가까운 곳에 선언

짧은 함수라면 함수의 지역 변수는 맨 처음에 선언합니다.

하지만 길이가 긴 코드라면 해당 변수를 사용할 위치와 가까운 곳에 선언하는 것이 코드를 읽으며 변수를 파악하기에 좋습니다.

#### 인스턴스 변수

> 클래스 맨 위에 선언

인스턴스 변수는 변수 간 거리를 두지 않은 채로 클래스의 시작부분에 선언합니다.

잘 만든 클래스라면 클래스의 대부분의 메서드가 인스턴스 변수를 사용하기 때문입니다.



## 가로 형식

### 가로 길이

> 역시 되도록이면 짧게

지금껏 이야기했던 내용들과 동일하게 짧을수록 좋습니다.



### 띄어쓰기

> 공백을 이용한 요소 구분 & 밀접도 표현

```java
int lineSize = line.length();  // O
int lineSize=line.length();    // X
```

공백을 사용하면 좌항과 우항을 분명하게 분리할 수 있습니다.



```java
lineWidthHistogram.addLine(lineSize, lineCount); // O
lineWidthHistogram.addLine(lineSize,lineCount);  // X

recordWidestLine(lineSize);  // O
recordWidestLine (lineSize); // X
```

메서드의 두 인수는 밀접하지 않기 때문에 띄어 씁니다.

함수와 인수는 밀접하기 때문에 붙여 씁니다.



### 가로 정렬

> 하지 않기

```java
private       Socket          socket;
private       InputStream     input;
private       OutputStream    output;
private       Reques          request; 		
private       Response        response;
// X

private Socket socket;
private InputStream input;
private OutputStream output;
private Reques request; 		
private Response response;
// O
```

가로 정렬은 눈에는 깔끔해 보이지만 정작 코드를 파악하는 데는 도움이 되지 않습니다. (코드의 필요한 부분만 읽게 되면서 놓치는 부분이 생깁니다)



### 들여쓰기

> 파일 구조 파악을 용이하게 만듦

들여쓰기는 코드의 범위를 시각적으로 표현합니다.

한 눈에 코드의 구조를 파악할 수 있게 도와주기 때문에 반드시 사용해야 합니다.

간단한 조건문, 반복문에서는 무시하고픈 생각이 들지만 그렇다고 하더라도 들여쓰기를 하는 것이 좋습니다.



## 팀 규칙

> 팀의 규칙에 따르기

당연하지만 팀으로 움직인다면 팀의 규칙을 따라야합니다.
