# [Spring Boot] JPA에서 Group By 후 null값 문제 해결

## 과정

1. 각 페이지의 조회수를 출력하길 원해서
2. Group By를 사용해 url별로 count를 하는 쿼리문을 작성했다.

```sql
SELECT url, COUNT(1) FROM Visitors GROUP BY URL ORDER BY 2 DESC
```

3. Repository에 있는 이 쿼리문이 Return하는 결과물은 Entity와 결이 다르기 때문에 기존처럼 Entity로 반환을 받을 수 없었다.
4. getUrl, getCount가 있는 인터페이스를 만들고 이 인터페이스가 결과값을 받도록 했다.

```java
// 쿼리 결과를 받을 인터페이스
public interface PageVisitorsListResponseDtoInterface {
    String getUrl();
    Long getCount();
}
```

```java
public interface BlogRepository extends JpaRepository<Visitors, Long> {
    @Query("SELECT url, COUNT(1) as count FROM Visitors GROUP BY URL ORDER BY 2 DESC")
    List<PageVisitorsListResponseDtoInterface> countVisitors_page();
}
```

5. 인터페이스로 받은 결과물을 서비스단에서 `map(PageVisitorsListResponseDto::new)`를 사용해서 PageVisitorsListResponseDto로 바꾸고 리스트 형태로 Return 시켰다.
6. 결과물을 보니 **url이 null값으로 나왔다.**
7. `nativeQuery = true`를 이용해 JPQL이 아니라 Native Query로 Query를 날려보았다.
8. 로컬에선 문제 없이 동작하고 url도 잘 출력됐지만, EC2에 올리니 **DB의 Table을 찾지 못하는 문제**가 생겼다.

```
java.sql.SQLException: Table 'database_blog.Visitors' doesn't exist
```



## 해결

9. count는 정상적으로 되는데 url만 안 나오는 이유를 고민하다 group by를 한 결과물인 url이 JPQL에서 다르게 해석될 수도 있다고 생각하여 `as url`을 붙여 컬럼명을 명시해주니 잘 해결됐다.

```java
@Query("SELECT url as url, COUNT(1) as count FROM Visitors GROUP BY URL ORDER BY 2 DESC")
List<PageVisitorsListResponseDtoInterface> countVisitors_page();
```



## 사실은... : JPQL & Native Query

### JPQL

- SQL을 추상화한 쿼리 언어
- **엔티티 객체를 대상**으로 쿼리 수행
  - 쿼리문으 `FROM Visitors`부분이 Repository에서 매개변수로 받은 Visitors Entity를 의미
- 모르고 사용했는데, JPQL에서는 `as alias`가 필수!!!!!!!



### Native Query

- **테이블을 대상**으로 쿼리 수행

- <u>쿼리 실행 시 대소문자를 구분</u>!!!!!!!
  - DB에 있는 테이블 명은 Visitors가 아니라 visitors였다..
  - 그래서 테이블을 못 찾았던 것 (테이블 명을 소문자로 바꿔주니 잘 동작)
