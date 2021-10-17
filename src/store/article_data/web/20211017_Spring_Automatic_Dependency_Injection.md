# [Spring] 의존 객체 자동 주입이란?

의존객체를 주입할 때(Dependency Injection) 지금까지는 매번 Resource에 있는 설정파일(XML 파일)에서 <constructor-org>  나 <property>  태그로 대상을 명시해줬다.

**의존 객체 자동 주입**은 설정파일에서 이런 태그를 사용하지 않고 **Spring Container가 자동으로 대상 객체에 필요한 의존성을 주입하는 것**을 말한다.



## 종류

- `@Resource` - 이름
- `@Autowired` - 타입
- `@Inject` - 타입



### @Resource

> name 속성의 이름을 기준으로 탐색

- Java에서 지원하는 어노테이션

#### 탐색 순서

> 이름 -> 타입 -> @Qualifier -> 실패

#### 대상

<u>프로퍼티, 메소드</u>에 사용 가능 (default 생성자 필요)



### @Autowired

> type 속성의 이름을 기준으로  탐색

- Spring에서 지원하는 어노테이션

#### 탐색 순서

> 타입 -> 이름 -> @Qualifier -> 실패

#### 대상

<u>생성자, 프로퍼티, 메소드</u>에 사용 가능 (프로터티, 메소드는 default 생성자 필요)



### @Inject

> type 속성의 이름을 기준으로  탐색

- Java에서 지원하는 어노테이션

####  탐색 순서

> 타입 -> @Qualifier-> 이름 -> 실패

#### 대상

<u>생성자, 프로퍼티, 메소드</u>에 사용 가능 (프로터티, 메소드는 default 생성자 필요)



## @Qualifier

Autowired 사용 시, type이 동일한 bean객체가 여러개 있으면 Spring이 Exception을 발생시킨다.

@Qualifier는 이런 문제가 발생하지 않도록 어떤 bean 객체를 말하는 건지 지정해주는 것을 말한다.

```xml
<context:annotation-config>
    <-- Member member = new Member() -->
    <bean id="member1" class="example.Member">
        <qualifier value="m1"/>
    </bean>
<context:annotation-config/>
```

```java
pubic class MemberDao{  
    @Autowired  @Qualifier("m1")
    private Member member;       

    public void setMember(Member member){      
        this.member = member;  
    }
}
```



## 비교

- 명시적 의존 주입

```xml
<?xml version="1.0" encoding="UTF-8" ?>
 
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd">
 
    <bean id="studentDao" class="com.member.StudentDao" />
    <bean id="professorDao" class="com.member.ProfessorDao" />
     
    <bean id="university" class="com.University">
        <!— 생성자 주입방식 —>
        <constructor-arg ref="studentDao"/>
        <!— Setter 메소드 주입방식 —>
        <property name="professorDaoMethod" ref="professorDao"/>
    </bean>
     
</beans>
```

```java
public class University {
    private StudentDao studentDao;
    private ProfessorDao professorDao;
 
    public University (StudentDao studentDao) {
        this.studentDao = studentDao;
    }
 
    public void setProfessorDaoMethod(ProfessorDao professorDao) {
        this.professorDao = professorDao;
    }
}
```



- 의존 객체 자동 주입

```xml
<?xml version="1.0" encoding="UTF-8" ?>
 
<beans xmlns="http://www.springframework.org/schema/beans"
	   xmlns:context="http://www.springframework.org/schema/context"
	   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.springframework.org/schema/beans 
 			http://www.springframework.org/schema/beans/spring-beans.xsd
 			http://www.springframework.org/schema/context
 			http://www.springframework.org/schema/context/spring-context.xsd">
    
    <context:annotation-config />
 
    <bean id="studentDao" class="com.member.StudentDao" />
		<qualifier value ="AAA" />
	</beans>
    <bean id="professorDao" class="com.member.ProfessorDao" />
		<qualifier value ="AAA" />
	</beans>
     
    <bean id="university" class="com.University" />
     
</beans>
```

```java
public class University {
    @Autowired
    @Qualifier("AAA")
    private StudentDao studentDao;
    private ProfessorDao professorDao;
 
    @Resource(name="professorDao")
    public void setProfessorDaoMethod(ProfessorDao professorDao) {
        this.professorDao = professorDao;
    }
}
```

(생성자 주입 방식에 Autowired 사용 / Setter 메소드 주입 방식에 Resource 사용)



## 출처

https://velog.io/@sungmo738/Resource-Autowired-Inject-%EC%B0%A8%EC%9D%B4

https://u-it.tistory.com/entry/%EC%9E%90%EB%8F%99-%EC%8A%A4%EC%BA%94-%EB%AA%85%EB%A0%B9%ED%83%9C%EA%B7%B8-%EC%9E%90%EB%8F%99-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-contextannotation-config-AutowiredQulifierResourceInjection

https://preamtree.tistory.com/93