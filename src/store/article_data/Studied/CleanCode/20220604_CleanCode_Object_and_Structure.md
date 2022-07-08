# [CleanCode] 객체와 자료구조

```
출처 : Clean Code - Robert C. Martin
```

이번 글에서는 이름과 형식을 넘어 좋은 코드를 위한 한 단계 더 나아간 객체와 자료구조에 대해 다루겠습니다.

객체와 자료구조는 서로 다른 특성을 가지고 있으며 필요에 따라 이를 적절하게 잘 사용해야 합니다.

시작하기 앞서 결론부터 간단히 이야기하자면, 새로운 타입의 추가가 빈번히 필요하다면 객체가 적합하고 새로운 동작의 추가가 빈번히 필요하다면 자료구조가 더 적합합니다.



## 추상화

> 외부로부터 코드의 내부를 감추기

내부 구조를 감추기 위해 추상화를 사용합니다.

변수를 외부에서 직접 다뤄선 안 된다면서 변수에 접근하는 getter와 setter를 public으로 만드는 것은 좋은 방식이 아닙니다.

getFuel()보다는 getFuelPercentage()가 더 추상화된 함수입니다.



## 객체/자료 비대칭

> 객체는 자료를 비공개 & 자료를 다루는 함수를 제공
>
> 자료구조는 자료를 공개

객체를 사용하는 객체지향적인 코드는 새로운 클래스가 추가되는 것에 변화가 적습니다. 하지만 새로운 함수(메서드)가 추가된다면 변화가 큽니다.

자료구조를 사용하는 절차지향적인 코드는 새로운 클래스가 추가되면 변화가 큽니다. 하지만 새로운 함수가 추가되는 것에 대한 변화는 작습니다.



```java
public class Circle implements Shape {
	public Point center;
	public double radius;
	public double width;

	public double area() {
		return PI*radius*radius;
	}
}

public class Square implements Shape {
	public Point topLeft;
	public double side;

	public double area() {
		return side*side;
	}
}
```
객체를 사용하는 코드

새로운 클래스 Rectangle가 추가되어도 다른 객체들은 영향을 받지 않습니다.

하지만 Shape 인터페이스에 새로운 메서드가 추가된다면 모든 구현 클래스에 수정이 필요합니다.

```java
public class Circle {
	public Point center;
	public double radius;
	public double width;
}

public class Square {
	public Point topLeft;
	public double side;
}

public class Geometry {
	public final double PI = 3.141592653585793;

    public double area(Object shape) throws NoSuchShapeException {
		if(shape instanceOf Circle) {
			Circle c = (Circle)shape;
			return PI * c.radius * c.radius
		}
        else if(shape instanceOf Square) {
			Square s = (Square)shape;
			return s.side * s.side;
		}
	}
}
```
자료구조를 사용하는 코드

새로운 클래스 Rectangle가 추가된다면 Geometry의 area 로직도 바뀌어야 합니다.

하지만 Geometry에 새로운 함수가 추가되는 것은 Circle이나 Square 클래스에는 아무런 영향을 끼치지 않습니다.



## 디미터 법칙

> 직접 사용하지 않는 객체의 내부를 몰라야 하는 법칙

지금껏 해 왔던 것 처럼 한 객체는 직접 사용하지 않는 다른 객체의 내부 구조를 알아선 안 되는 것이 디미터 법칙입니다.

A가 B를 사용하고 B가 C를 사용할 때, A는 C에 대해 알아선 안 됩니다.

예로 A 객체 내부에서 C를 반환하는 B객체의 B.b() 메서드를 사용할 때, B.b().c()를 사용하는 것은 OOP를 어기는 코드입니다.

A 객체는 B 객체를 다루는데, B 객체가 반환하는 C 객체의 메서드에 대해서도 알고 있기 때문입니다.

따라서 A.a().b().c().d()..... 이렇게 꼬리를 무는 코드는 지양해야 합니다.



## 잡종 구조

객체와 자료구조가 섞인 형태로 피하는 것이 좋다.



## 자료 전달 객체 (Data Transfer Object, DTO)

> 공개 변수만 있고 함수는 없는 자료 구조체

연결된 한 묶음의 코드는 하나의 생각을 표현합니다.

빈 행으로 코드를 구분짓는 것은 한 개념이 끝나고 새로운 개념이 시작된다는 것을 알려주는 신호입니다.



### Bean

> 비공개 변수와 Getter, Setter가 있는 객체인척하는 자료구조



### 활성 레코드

> 공개/비공개 변수와 Getter, Setter, Save, Find 가 있는 자료구조 (데이터 테이블이나 소스에서 직접 자료를 변환한 결과물)