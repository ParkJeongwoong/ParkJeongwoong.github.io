# [Spring] Bean이란?

아직 Spring을 많이 써보지 않아서 Bean이라는 단어가 익숙하지 않다. 분명 이전에 Bean에 대한 글을 읽은 적이 있지만, 한 동안 Spring을 안 쓰다 보니 기억이 잘 나지 않는다.

앞으로도 이런 일이 있을 수 있기 때문에, 기록을 하는 용도로 Bean에 대한 정리를 할까 한다.



## Bean의 개념

**Bean** : Spring에서 IoC 컨테이너가 관리하는 객체

(IoC 컨테이너 : Inversion of Control, 즉 제어권이 역전되었다는 말. 따라서 사용자가 아니라 <u>IoC 컨테이너가 객체의 생성, 생명 주기를 관리하는 기능을 제어</u>)



- Java의 new 연산자로 얻는 객체와는 다르다. (사용자가 직접 만들고 관리하는 객체)
  - `ApplicationContext.getBean()`으로 얻는 객체이다. (Spring이 만들고 관리하는 객체)
- 왜 이걸 써야하는가?
  - 객체에 대한 내용을 XML 파일에서 관리해서 Java 코드와 분리시키기 때문에 관리가 편해진다.
  - XML 파일이 가독성이 더 좋아 객체에 대한 파악이 쉽다. (이 부분은 개인차가 있다.)



## Bean의 생성

### Resource 폴더 - applicationContext.xml - Bean 태그를 사용한 정의

```xml
<bean id="studentDao" class="ems.member.dao.StudentDao"></bean>
```

studentDao 객체 생성

```xml
<bean id="registerService" class="ems.member.service.StudentRegisterService">
	<constructor-arg ref="studnetDao"></constructor-arg>
</bean>
```

<u>StudentDao를 참조</u>하는 객체 **StudentRegisterService** 객체 생성 (`StudentDao 객체 주입`)



! 이 때, bean이 참조하는 class, "ems.member.service.StudentRegisterService"는 당연하지만 미리 존재해야 함



#### Bean의 속성

- **class (필수)** : 정규화된 **Java Class** 이름
- id : 객체의 **고유 식별자**
- scope : 객체의 범위
- constructor-arg : 생성 시 생성자에 전달할 인수
- property : 생성 시 bean setter에 전달할 인수
- 기타 등등



## Bean의 사용

### Java 파일에서 xml 파일 로드 - Container 생성 - Bean 사용

```java
import org.springframework.context.support.ApplicationContext;

public class MainClass {

	public static void main(String[] args) {
		// 컨테이너 생성
		ApplicationContext contextContainer = new ApplicationContext("classpath:applicationContext.xml"); 
        
		// 해당 컨테이너에서 선택한 빈을 생성
		StudentRegisterService stdReg = contextContainer.getBean("registerService", StudentRegisterService.class); 
		stdReg.register();
		
		stdReg.close(); // 외부 리소스를 사용한 이후에는 반환
		
	}
}
```





## 출처

http://melonicedlatte.com/2021/07/11/232800.html

https://seongmun-hong.github.io/spring/Spring-Bean-Create