# [Spring] Spring 설정 - Java Config

Spring 설정은 2가지 방법을 통해 가능하다.

1. xml 파일을 이용한 설정
2. java 파일을 이용한 설정



이번에는 java 파일을 통해서 Spring 설정을 하는 법을 다뤄보고자 한다.

## Java Config 생성

### 1) Java Config 파일 생성

1. `src/main/resources` 에 있는 **applicationContext.xml** 파일을 대체하기 위해, `src/main/java` 디렉토리에 **ems.member.configuration** 패키지의 **MemberConfiguration.java** 파일 생성한다.



2. **@Configuration**

- 스프링 설정 파일로서 <u>스프링 컨테이너를 생성하게 만드는 어노테이션</u>

- 이 어노테이션이 붙은 Class는 Config 파일이 되어 xml 파일과 같은 기능을 한다

```java
@Configuration
public class MemberConfig {}
```



3. **@Bean**

- <u>Bean 객체를 만드는 어노테이션</u> (<bean> 태그와 같은 역할)
- **return 할 때 새로운 객체를 new를 이용해서 반환한다**
- <u>클래스는 xml의 class</u>와 동일, <u>클래스 명은 xml의 id</u>와 동일하다

```java
/*
<bean id="studentDao" class="ems.memberm.service.StudentDao"></bean>
*/
@Bean
public StudentDao studentDao() {
	return new StudentDao();
}
```



4. **의존성 부여**

- 생성자 파라미터에 <u>의존하는 객체의 생성자를 넣음</u>으로써 **의존성을 부여한다**

```java
/*
<bean id="registerService" class="ems.memberm.service.StudentRegisterService">
	<constructor-arg ref="StudentDao"></constructor-arg>
</bean>
*/
@Bean
public StudentRegisterService registerService() {
    return new StudentRegisterService(studentDao());
}
```



5. **property 부여**

property가 부여된 bean 객체를 만드는 방법은 다음과 같다.

- 먼저 <u>객체를 생성</u>한다.
- <u>setter를 이용</u>해서 각 value를 부여한다
- propery가 부여된 객체를 반환한다.

```java
/*
<bean id="dataBaseConnectionInfoDev" class="ems.memberm.service.DataBaseConnectionInfo">
	<property name="JdbcUrl" value="jdbc:oracle:thin:@localhost:1521:xe"></property>
	<property name="UserId" value="scott"></property>
	<property name="UserPw" value="tiger"></property>
</bean>
*/
@Bean
public DataBaseConnectionInfo dataBaseConnectionInfoDev() {
    DataBaseConnectionInfo infoDev = new DataBaseConnectionInfo();
    
    infoDev.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
    infoDev.setUserId("scott");
    infoDev.setUserPw("tiger");

    return infoDev;
}
```

만약 propery가 Array나 Map 형태라면 다음과 같은 방법을 사용하면 된다.

- Array 형태의 value는 <u>ArrayList<String></u>을 만들어서 setter로 부여한다
- Map 형태의 value는 HashMap을 이용해 <u>Map<String, String></u>을 만들어서 setter로 부여한다

```java
/*
<bean id="informationService" class="ems.memberm.service.EMSInformationService">
	<property name="developeres">
		<list>
			<value>One</value>
			<value>Two</value>
			<value>Three</value>
		</list>
	</property>
	<property name="administrators">
		<map>
			<entry>
				<key>
					<value>Cheney</value>
				</key>
                <value>cheney@springPjt.org</value>
			</entry>
			<entry>
				<key>
					<value>Jasper</value>
				</key>
                <value>jasper@springPjt.org</value>
			</entry>
		</map>
	</property>
	<property name="dbInfos">
		<map>
			<entry>
				<key>
					<value>dev</value>
				</key>
                <ref bean="dataBaseConnectionInfoDev"/>
			</entry>
			<entry>
				<key>
					<value>real</value>
				</key>
                <ref bean="dataBaseConnectionInfoReal"/>
			</entry>
		</map>
	</property>
</bean>
*/
@Bean
public EMSInformationService informationService() {
    EMSInformationService info = new EMSInformationService();
    
    ArrayList<String> developers = new ArrayList<String>();
    developers.add("One");
    developers.add("Two");
    developers.add("Three");
    info.setDevelopers(developers);
		
    Map<String, String> administrators = new HashMap<String, String>();
    administrators.put("Cheney", "cheney@springPjt.org");
    administrators.put("Jasper", "jasper@springPjt.org");
    info.setAdministrators(administrators);
		
    Map<String, DataBaseConnectionInfo> dbInfos = new HashMap<String, DataBaseConnectionInfo>();
    dbInfos.put("dev", dataBaseConnectionInfoDev());
    dbInfos.put("real", dataBaseConnectionInfoReal());
    info.setDbInfos(dbInfos);

    return info;
}
```



#### 전체 Java Config 파일 코드

전체 코드는 다음과 같다.

```java
@Configuration
public class MemberConfig {
    @Bean
    public StudentDao studentDao() {
        return new StudentDao();
    }

    @Bean
    public StudentRegisterService registerService() {
        return new StudentRegisterService(studentDao());
    }
    
    @Bean
    public DataBaseConnectionInfo dataBaseConnectionInfoDev() {
        DataBaseConnectionInfo infoDev = new DataBaseConnectionInfo();
        infoDev.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
        infoDev.setUserId("scott");
        infoDev.setUserPw("tiger");

        return infoDev;
    }
    
    @Bean
    public EMSInformationService informationService() {
        EMSInformationService info = new EMSInformationService();

        ArrayList<String> developers = new ArrayList<String>();
        developers.add("One");
        developers.add("Two");
        developers.add("Three");
        info.setDevelopers(developers);

        Map<String, String> administrators = new HashMap<String, String>();
        administrators.put("Cheney", "cheney@springPjt.org");
        administrators.put("Jasper", "jasper@springPjt.org");
        info.setAdministrators(administrators);

        Map<String, DataBaseConnectionInfo> dbInfos = new HashMap<String, DataBaseConnectionInfo>();
        dbInfos.put("dev", dataBaseConnectionInfoDev());
        dbInfos.put("real", dataBaseConnectionInfoReal());
        info.setDbInfos(dbInfos);

        return info;
    }
}
```



### 2) Java Config 파일 적용

XML 파일을 스프링 프로젝트의 설정으로 적용하기 위해서 우리는 `GenericXmlApplicationContext` 클래스를 사용했었다.

마찬가지로 Java Config 파일의 설정을 스프링 프로젝트에 적용하기 위한 클래스도 있는데, 

`AnnotationConfigApplicationContext` 클래스를 사용하면 지금까지 만든 Java Config 파일을 적용할 수 있다.

```java
// GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:applicationContext.xml");
AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(MemberConfig.class);
```

(`GenericXmlApplicationContext`이 아닌 `AnnotationConfigApplicationContext` 사용)



## Java Config 분리

"개발 자체"와 "유지 보수"의 용이성을 위해 **기능별로** java 설정 파일을 분리해서 만드는 것도 가능하다.

### 1) 기능별로 분리된 Java Config 파일 생성

일반적으로 **DAO, Service, DB, Utilities** 처럼 기능별로 분리한다.

<u>이 때, 참조하는 함수(bean 객체 생성함수)가 다른 java 설정 파일에 있다면 @Autowired를 사용해서 다른 java 파일에서 생성된 Bean 객체를 가져온다.</u>

- 기존 파일

```java
// ***** 기존 파일
@Bean
public DataBaseConnectionInfo dataBaseConnectionInfoDev() {
    DataBaseConnectionInfo infoDev = new DataBaseConnectionInfo();
    infoDev.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
    infoDev.setUserId("scott");
    infoDev.setUserPw("tiger");
    
    return infoDev;
}

@Bean
public DataBaseConnectionInfo dataBaseConnectionInfoReal() {
    DataBaseConnectionInfo infoReal = new DataBaseConnectionInfo();
    infoReal.setJdbcUrl("jdbc:oracle:thin:@192.168.0.1:1521:xe");
    infoReal.setUserId("masterid");
    infoReal.setUserPw("masterpw");
    
    return infoReal;
}

@Bean
public EMSInformationService informationService() {
    EMSInformationService info = new EMSInformationService();
    
    Map<String, DataBaseConnectionInfo> dbInfos = new HashMap<String, DataBaseConnectionInfo>();
    dbInfos.put("dev", dataBaseConnectionInfoDev()); // 여기선 함수형태로 불러옴
    dbInfos.put("real", dataBaseConnectionInfoReal()); // 여기선 함수형태로 불러옴
    info.setDbInfos(dbInfos);
    
    return info;
}
```

- 분리된 파일

```java
// ***** 분리된 파일
// java 파일 1
@Bean
public DataBaseConnectionInfo dataBaseConnectionInfoDev() {
    DataBaseConnectionInfo infoDev = new DataBaseConnectionInfo();
    infoDev.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
    infoDev.setUserId("scott");
    infoDev.setUserPw("tiger");
    
    return infoDev;
}

@Bean
public DataBaseConnectionInfo dataBaseConnectionInfoReal() {
    DataBaseConnectionInfo infoReal = new DataBaseConnectionInfo();
    infoReal.setJdbcUrl("jdbc:oracle:thin:@192.168.0.1:1521:xe");
    infoReal.setUserId("masterid");
    infoReal.setUserPw("masterpw");
    
    return infoReal;
}

// java 파일 2
@Autowired
DataBaseConnectionInfo dataBaseConnectionInfoDev;

@Autowired
DataBaseConnectionInfo dataBaseConnectionInfoReal;

@Bean
public EMSInformationService informationService() {
    EMSInformationService info = new EMSInformationService();
    
    Map<String, DataBaseConnectionInfo> dbInfos = new HashMap<String, DataBaseConnectionInfo>();
    dbInfos.put("dev", dataBaseConnectionInfoDev); // 여기선 Autowired로 가져온 bean 객체를 불러옴
    dbInfos.put("real", dataBaseConnectionInfoReal); // 여기선 Autowired로 가져온 bean 객체를 불러옴
    info.setDbInfos(dbInfos);
    
    return info;
}
```



### 2) 여러 개의 Java Config 파일 적용

여러 개의 Java 설정 파일을 불러오는 방법은 쉽다.

여러 클래스를 나열해서 불러오면 된다.

```java
// AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(MemberConfig.class);
AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(
    MemberDaoConfig.class, MemberServiceConfig.class, MemberDBConfig.class, MemberUtilConfig.class
);
```



#### `@Import`

Import 어노테이션을 이용하면 Java Config 파일 적용할 때 여러 개를 나열할 필요가 없다.

[방법]

**@Import({java 클래스 파일1, java 클래스 파일2, ...})**

```java
@Configuration
@Import({MemberDaoConfig.class, MemberServiceConfig.class, MemberDBConfig.class, MemberUtilConfig.class})
public class MemberMainConfig {
    ...
}
```





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌