# [Spring] JNDI

**J**ava **N**aming and **D**irectory **I**nterface

## JNDI란?

JNDI는 "**네이밍 / 디렉토리 서비스**를 사용하기 위한 인터페이스"입니다.



제가 처음 JNDI에 대해 알게 된 건 JDBC, DBCP에 대한 자료를 조사하면서 였습니다.

JNDI는 도대체 무엇이고 왜 JDBC, DBCP와 함께 등장했던 것일까요?



JDNI의 설명에 있는 디렉토리 서비스는 각 자원을 디렉토리 별로 분류하여 검색하기 쉽게 만드는 서비스입니다. ("jdbc/mydb" 형식)

네이밍 서비스는 각 자원에 이름을 붙이는 것을 말하는데,

결국 JNDI는 각 자원에 이름을 붙이고 이 <u>이름을 통해 자원을 찾도록 도와주는 인터페이스</u> 입니다.



JNDI가 DBCB와 관련되어 나온 이유는 JNDI를 이용해 DB의 Pool을 미리 네이밍시키고 Connection을 편리하게 관리할 수 있기 때문입니다.

JNDI를 이용하면 어플리케이션 소스에서 직접 DB 커넥션을 관리하지 않고 JNDI를 이용해 WAS단에서 DB 커넥션을 제어할 수 있습니다.



([출처](https://eongeuni.tistory.com/43]))에 의하면 DBCP와 JNDI는 엄밀하게 말하면 서로 비교 대상이 아닙니다. 다만 관례적으로 DBCP는 어플리케이션 소스단에서 커넥션 풀을 제어하는 방식, JNDI는 WAS단에서 커넥션을 네이밍해놓고 제어하는 방식을 말합니다.



## 사용

```xml
<resource-ref>
    <description>ConnectionResource</description>
    <res-ref-name>jdbc/mydb</res-ref-name>
    <res-type>javax.sql.DataSource</res-type>
    <res-auth>Container</res-auth>
</resource-ref>

<!--
    description : 설명
    res-ref-name : JDBC 이름, <Resource>의 name 부분과 동일하게 입력
    res-type : <Resource>의 type 부분과 동일하게 입력
    res-auth : <Resource>의 auth 부분과 동일하게 입력

출처: https://all-record.tistory.com/104 [세상의 모든 기록]
-->
```

(web.xml)

```xml
<Resource name="jdbc/mydb"
          auth="Container"
          type="javax.sql.DataSource"
          username="DB 계정이름"
          password="DB 비밀번호"
          driverClassName="oracle.jdbc.driver.OracleDriver"
          url="jdbc:oracle:thin:@ip주소:포트번호:전역 데이터베이스 이름"
          loginTimeout="10" 
          maxActive="50"
          maxIdle="20"
          maxWait="5000" />

<!--
    name : JDBC이름, 변경 가능
    auth : 컨테이너를 자원 관리자로 기술
    type : 웹에서 이 리소스를 사용할 때 DataSource로 리턴됨
    username : 접속계정
    password : 접속할 계정 비밀번호
    driverClassName : JDBC 드라이버
    
    loginTimeout : 연결 끊어지는 시간
    maxActive : 최대 연결 가능한 Connection수 (기본 20개)
    maxIdle : Connection pool 유지를 위해 최대 대기 connection 숫자
    maxWait : 사용 가능한 커넥션이 없을 때 커넥션 회수를 기다리는 시간 (1000 = 1초)
    testOnBorrow : db에 test를 해볼 것인지

출처: https://all-record.tistory.com/104 [세상의 모든 기록]
-->
```

(context.xml)



위처럼 설정을 해 놓으면 아래처럼 lookup 메서드를 이용하여 이름으로 데이터소스를 찾을 수 있습니다.

```java
Connection conn = null;
Context ctx = null;
Datasource ds = null;
// String jndi = databaseInfo.getProperty("jndi"); // (변경가능) 이렇게 Property를 찾고 Context 검색도 가능

try {
    ctx = new InitialContext(); // WAS와 연결
    
    ds = (Datasource) ctx.lookup("java:/comp/env/jdbc/mydb"); // JNDI를 활용하여 연결된 WAS에서 데이터소스 검색
    // ds = (Datasource) ctx.lookup(jndi); // (변경가능)
    
    conn = ds.getConnection (); // 데이터소스에서 커넥션 가져오기
    
} catch (Exception e) {
    e.printStackTrace();
} 
```

(소스)



- `web.xml` 대신 `server.xml` 을 이용하기도 합니다.
- 소스코드에서 바로 데이터소스를 찾는 대신,

​        (1) `Context envCtx = (Context) InitialContext.lookup("java:comp/env");` 로 "comp/env"에 해당하는 Context 객체를 먼저 찾고

​        (2) 여기서 다시 `ds = (DataSource) envCtx.lookup("jdbc/orcl");` 로 데이터소스를 찾기도 합니다.





## 출처

https://hamait.tistory.com/331

https://ss-o.tistory.com/133

https://go-coding.tistory.com/76

https://eongeuni.tistory.com/43

https://atoz-develop.tistory.com/entry/Tomcat-%EC%84%9C%EB%B2%84-DataSource-%EC%84%A4%EC%A0%95-%EB%B0%A9%EB%B2%95-JNDI

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=nine01223&logNo=220339886074

https://carrotweb.tistory.com/89

https://go-coding.tistory.com/76

https://all-record.tistory.com/104
