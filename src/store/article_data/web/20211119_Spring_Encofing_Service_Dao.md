# [Spring] UTF-8 한글 인코딩 설정, Service 객체

오늘은 Spring에서 한글로 된 데이터를 온전하게 다루기 위한 UTF-8 설정 방법과 Service, Dao 객체를 만드는 법에 대해 알아보겠습니다.



## UTF-8 인코딩 설정

Spring에서 한글 깨짐 현상이 나타난다면 UTF-8 설정이 되지 않았기 때문입니다.



- jsp 페이지에서 한글이 깨지는 현상을 해결하려면 jsp 파일의 최상단에 아래의 코드를 추가합니다.

```jsp
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
```

**contentType** : 서버에서 생성될 HTML의 charset 정보

**pageEncoding** : JSP 내에서 java 코드의 charset 정보



- GET, POST 요청 등에서 한글을 사용하기 위해서는 다음과 같은 설정이 추가적으로 필요합니다.

```xml
...

<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>
        org.springframework.web.filter.CharacterEncodingFilter
    </filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>

<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>

...
```

(web.xml)



- 인코딩 문제는 톰캣 서버에서도 생길 수 있습니다. 이를 해결하기 위해서는 톰캣의 server.xml에서 Connertor에 `URIEncoding="UTF-8"`를 추가해주어야 합니다.

```xml
<Connector connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8" />
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" URIEncoding="UTF-8" />
```

(server.xml)



- html 파일이 존재한다면 다음과 같은 방법으로 utf-8을 설정할 수 있습니다.

```html
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
```



## Service, Dao 객체

웹서비스의 기능을 담당하는 **Service 객체**와 DB 접근을 담당하는 **DAO(Database Access Object) 객체**를 생성하기 위한 방법은 여러 가지가 있습니다.



### 방법1 : `new 연산자`

```java
MemberService service = new MemberService();
```

new 연산자를 통해서 필요한 객체를 생성할 수도 있습니다. 하지만 이렇게 new 연산자로 생성하는 객체는 Bean객체가 아닙니다.



### 방법2 : `스프링 설정파일`

```xml
<beans:bean id="service" class="com.jw.lec17.member.service.MemberService"></beans:bean>
```

```java
@Autowired
MemberService service;
```

스프링 설정 파일에 bean 객체를 선언하고 @Autowired, @Resource, @Inject를 이용해 의존 객체 자동 주입을 하는 방법입니다.



### 방법3 : `어노테이션`

> 가장 많이 사용되는 방법입니다.

```java
@Service // Service 객체라는 것을 명시
public class MemberService implements IMemberService {...}

@Autowired
MemberService service;
```

@Controller를 붙여 해당 클래스를 Controller로 설정하듯, **@Service**를 통해서 해당 객체를 Service 객체로 지정합니다. (`@Service`, `@Repository`, `@Component` 모두 사용 가능)

이후 의존 객체 자동 주입을 통해 객체를 생성합니다.



[다른 예시]

```java
@Repository("memService")
public class MemberService implements IMemberService {...}

@Resource(name="memService")
MemberService service;
```

bean 객체의 이름을 "memService"로 지정하고 Resource 어노테이션을 통해 의존 객체 자동 주입을 했습니다.





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌

https://www.hanumoka.net/2018/04/18/spring-20180418-spring-set-korean/

https://m.blog.naver.com/haskim0716n/221772670839
