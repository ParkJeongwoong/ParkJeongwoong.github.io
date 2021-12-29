# [Spring] JDBC

오늘은 Java에서는 데이터베이스에 접근하기 위해 사용하는 **JDBC**에 대해 알아보겠습니다.

## JDBC (Java Database Connectivity)

JDBC는 Java에서 데이터베이스에 접근하기 위해 사용한 **인터페이스**입니다.

Java Application이 데이터베이스를 조작하기 위해서는 Application의 요청을 받아 데이터베이스에서 이를 수행할 API가 필요합니다.

이 API의 역할을 하는 것이 드라이버인데 DBMS마다 데이터베이스를 다루는 방식이 다르기 때문에 드라이버는 DB 벤더사에서 만들어 제공합니다.

그런데 각 벤더사마다 마음대로 메소드를 만들면 사용하기 매우 불편할 것입니다.

JDBC가 여기서 등장하는데, Java에서는 이 문제를 해결하기 위해서 **JDBC Interface**를 사용했습니다.

JDBC Interface는 java.sql 패키지를 의미하며 이 안에는 인터페이스로 구현된 데이터베이스 관련 객체들이 있습니다.

벤더사는 이 JDBC Interface를 기반으로 JDBC 드라이버를 구현했고 이 덕분에 우리는 Java에서 정해놓은 메소드로 DB를 다룰 수 있습니다.



오라클의 JDBC 드라이버 : **oracle.JDBC.driver.OracleDriver**

MySQL의 JDBC 드라이버 : **org.git.mm.mysql.Driver**



## Connection Flow

JDBC를 통해 DB에 연결하는 방법은 다음과 같은 과정을 거칩니다.

>  드라이버 로딩 - DB 연결 - **SQL 작성 및 전송** - 자원 해제



1. 드라이버 로딩

**Class.forName()** 을 이용해 <u>JDBC 드라이버를 메모리에 올립니다</u>.



2. DB 연결

**DriverManager.getConnection(포트번호를 포함한 드라이버 경로, 유저이름, 비밀번호)** 을 이용해 메모리에 올라간 드라이버 객체를 <u>데이터베이스와 연결</u>하고 연결 상태를 표현하는 **Connection** 객체를 만듭니다.



3. SQL 작성 및 전송

String으로 된 SQL문을 Connection 객체의 **prepareStatement()** 메소드로 입력하고 반환값을 **PreparedStatement 객체**에 담습니다.

이 때 SQL문에서 변수는 '?'로 표시하고 '?'에 대응하는 값을 지정할 때는 SQL문을 담은 PreparedStatement 객체에서 **setString(인덱스, 값)**이나 **setInt(인덱스, 값)** 과 같은 메소드를 사용해 설정합니다.

SQL문의 실행은 **execute()** - [T/F 반환; 모든 구문 수행], **executeQuery()** - [ResultSet 객체 반환; SELECT 구문 수행], **executeUpdate()** - [Int 반환; SELECT 구문을 제외한 구문 수행] 메소드를 이용합니다.



4. 자원 해제

**pstmt.close()** 와 **conn.close()** 을 통해 사용한 자원을 해제합니다.



## 예시 - DAO 파일

```java
@Repository
public class MemberDao implements IMemberDao {
	
    // Driver Loading 용도
	private String driver = "oracle.jdbc.driver.OracleDriver"; // Load 할 Driver
	private String url = "jdbc:oracle:thin:@localhost:1521:xe"; // Driver 경로 w. Port
	private String userid = "scott";
	private String userpw = "tiger";
	
	private Connection conn = null; // Java.SQL에 있는 Conncetion
	private PreparedStatement pstmt = null; // Java.SQL에 있는 PreparedStatement
	private ResultSet rs = null; // 결과값을 받기 위한 Java.SQL의 ResultSet
	
	...

}
```

DAO 클래스 상단에 JDBC를 위해 필요한 변수를 선언합니다.



- Insert Method

```java
@Repository
public class MemberDao implements IMemberDao {
    ...
	
    @Override
    public int memberInsert(Member member) {
	
        int result = 0;
	
        try {
            // 1) 드라이버 로딩
            Class.forName(driver);
            // 2) DB 연결
            conn = DriverManager.getConnection(url, userid, userpw); // Java.SQL에 있는 DriverManager
            // 3) SQL 작성 및 전송
            String sql = "INSERT INTO member (memId, memPw, memMail) values (?,?,?)"; // 3-1) query문 작성
            // 3-2) query문 전송
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, member.getMemId());
            pstmt.setString(2, member.getMemPw());
            pstmt.setString(3, member.getMemMail());
            result = pstmt.executeUpdate(); // 성공한 횟수가 result로 return됨 (1이 return 됨)
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                // 4) 자원 해제
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
	
        return result;
	
    }
    
    ...
}
```

- Select Method

```java
@Repository
public class MemberDao implements IMemberDao {
    ...
        
    @Override
    public Member memberSelect(Member member) {
	
        Member mem = null;
	
        try {
            // 1) 드라이버 로딩
            Class.forName(driver);
            // 2) DB 연결
            conn = DriverManager.getConnection(url, userid, userpw);
            // 3) SQL 작성 및 전송
            String sql = "SELECT * FROM member WHERE memId = ? AND memPw = ?"; // 3-1) query문 작성
            // 3-2) query문 전송
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, member.getMemId());
            pstmt.setString(2, member.getMemPw());
            rs = pstmt.executeQuery();
	
            while (rs.next()) {
                String memId = rs.getString("memid");
                String memPw = rs.getString("mempw");
                String memMail = rs.getString("memMail");
                int memPurcNum = rs.getInt("memPurcNum");
	
                mem = new Member();
                mem.setMemId(memId);
                mem.setMemPw(memPw);
                mem.setMemMail(memMail);
                mem.setMemPurcNum(memPurcNum);
            }
	
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                // 4) 자원 해제
                if(rs != null) rs.close();
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
	
        return mem;
	
    }
    
    ...
}
```

- Update Method

```java
@Repository
public class MemberDao implements IMemberDao {
    ...
        
	@Override
    public int memberUpdate(Member member) {
	
        int result = 0;
	
        try {
            // 1) 드라이버 로딩
            Class.forName(driver);
            // 2) DB 연결
            conn = DriverManager.getConnection(url, userid, userpw);
            // 3) SQL 작성 및 전송
            String sql = "UPDATE member SET memPw = ?, memMail = ? WHERE memId = ?"; // 3-1) query문 작성
            // 3-2) query문 전송
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, member.getMemPw());
            pstmt.setString(2, member.getMemMail());
            pstmt.setString(3, member.getMemId());
            result = pstmt.executeUpdate(); // 성공한 횟수가 result로 return됨 (1이 return 됨)
	
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                // 4) 자원 해제
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
	
        return result;
	
    }
	
    ...
}
```

- Delete Method

```java
@Repository
public class MemberDao implements IMemberDao {
    ...
        
	@Override
    public int memberDelete(Member member) {
	
        int result = 0;
	
        try {
            // 1) 드라이버 로딩
            Class.forName(driver);
            // 2) DB 연결
            conn = DriverManager.getConnection(url, userid, userpw);
            // 3) SQL 작성 및 전송
            String sql = "DELETE member WHERE memId = ? AND memPw = ?"; // 3-1) query문 작성
            // 3-2) query문 전송
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, member.getMemId());
            pstmt.setString(2, member.getMemPw());
            result = pstmt.executeUpdate(); // 성공한 횟수가 result로 return됨 (1이 return 됨)
	
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                // 4) 자원 해제
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
	
        return result;
	
    }
    
    ...
}
```





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌

https://velog.io/@kyukim/%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EA%B7%9C%EC%95%BD%EA%B3%BC-JDBC%EC%9D%98-%EA%B4%80%EA%B3%84

https://kouzie.github.io/jdbc/JDBC.-1%EC%9D%BC%EC%B0%A8/#jdbc-driver

https://allg.tistory.com/20

https://www.progress.com/faqs/datadirect-jdbc-faqs/how-does-jdbc-work
