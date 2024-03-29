# [GitHub Blog 개발기] 서버 마이그레이션 (AWS => 라즈베리파이 => 오라클 클라우드)

AWS 프리티어 만료기간이 다가왔다.

6월부터는 매달 EC2와 RDS 비용을 발생할 예정인데, 최대한 저렴하게 서버를 운용하고 싶어서 서버를 이전하기로 결정했다.

최종적으로 오라클 클라우드를 선택했고 현재는 완전히 이전이 끝났다.



## 라즈베리파이 서버

가장 처음 생각한 건 라즈베리 파이로 자체 서버를 돌리는 것이었다.

초기 비용만 지불하면 이후부터는 전기세 내면 되기 때문이다.

오라클에서 무료로 제공하는 가상머신이 있다는 건 알고 있었지만, 평생 무료 정책이 언제라도 뒤집힐 수 있다고 생각해서 라즈베리파이 서버를 선택했다. (준비된 HTML, CSS, JS파일을 돌려주는 정적인 작업을 하는 깃헙과는 다르게 동적인 작업은 이용자 수가 많아지면 부담이 커질 수도 있다고 생각했다)



라즈베리파이 서버를 구축하는 과정은 다음과 같았다.

```
1. Ubuntu 22.04 LTS Server 설치
2. Putty를 이용한 22번 포트 SSH 접속 설정
3. Java, Git, MariaDB, Nginx, Certbot 설치
4. System 설정 (Timezone, 사용할 포트 열기)
5. 프로젝트 Pull 받기
6. Spring Config 설정 (application-**.properties 파일에 연결할 DB 주소 변경; MariaDB는 3306포트로 통신)
7. Nginx Config 설정 (80->8080 포트포워딩)
8. SSL 인증서 받고 443->8080 포트포워딩 <<실패>>
```

라즈베리파이에 우분투를 설치하고 스프링과 DB를 돌리는 것까진 성공했는데 SSL 인증에서 자꾸 실패했다.

![image-20220515031304224](../../../../public/assets/image-20220515031304224.png)

**no valid A records for ~** 라는 에러 메시지가 출력됐는데, 도메인 등록 사이트에 A record로 입력한 IP주소가 유효하지 않다는 이야기였다. (A record에 입력한 IP 주소가 도메인 네임과 연결된다)

"IP 주소는 멀쩡한데 뭐가 문제지??"라고 생각했데 알고보니 내가 입력한 주소는 공유기 내부에서 쓰이는 Private IP라서 외부에서 접근할 수 없는 IP라 그랬던 것이었다.

Public IP로 설정을 하니 외부에서도 접속이 가능했는데, 이상하게 80번 포트로는 접근이 안 됐다. (8080 포트는 가능)

기존에 했던 것처럼 Certbot에서 Standlone으로 SSL 인증서를 발급받고 싶었는데 80번 포트로 접근을 못하면 불가능한 일이었다. 

검색을 하다보니 통신사에서 80번 포트를 막는 경우가 있다는 걸 알게 되었다.

그래서 일단 블로그 서버는 오라클로 호스팅하고 라즈베리파이 서버는 6월에 이사하고 난 뒤 블로그 말고 다른 쓰임을 찾아보기로 결정했다.



## 오라클 클라우드 (OCI)

결국 블로그의 서버로 오라클 클라우드을 선택하게 됐고 지금은 완전히 이전을 끝내고 WS로 사용하고 있다.



오라클 클라우드에 서버를 구축하는 과정은 다음과 같았다.

```
1. Instance 생성 (SSH Key 생성)
2. Putty를 이용한 SSH 접속 설정(PuyyuGen으로 ppk키로 변경 후 등록)
3. Java, Git, MariaDB, Nginx, Certbot 설치
4. System 설정 (Timezone, 사용할 포트 열기)
5. 프로젝트 Pull 받기
6. Spring Config 설정 (application-**.properties 파일에 연결할 DB 주소 변경; MariaDB는 3306포트로 통신)
7. Nginx Config 설정 (80->8080 포트포워딩)
8. 오라클 클라우드에서 고정 IP 할당
9. SSL 인증서 받고 443->8080 포트포워딩
```

오라클에서도 80번 포트 접속 문제가 있었는데 꽤 오랫동안 해결을 못했다.

결국 우분투의 ufw를 믿고 iptables는 다 지워버리는 방법을 사용해서 해결했다. (https://blog.elmi.page/412, https://stackoverflow.com/questions/54794217/opening-port-80-on-oracle-cloud-infrastructure-compute-node/54810101#54810101)



서버를 구축한 이후에는 AWS RDS에 있던 데이터를 Dump해서 가져와야 했다.

MariaDB의 데이터를 Dump하는 과정은 다음과 같았다. (https://velog.io/@prayme/AWS-RDS-dump%ED%95%98%EA%B8%B0)

```
1. dump.sql 파일 생성 (Dump 받을 컴퓨터에서)
mysqldump -h {접속할 DB 주소} -u {유저 이름} -p {DB 이름} > {저장할 파일 이름}
=> mysqldump -h database-blog.식별자.ap-northeast-2.rds.amazonaws.com -u {RDS DB 유저} -p database_blog > dump.sql

<<MariaDB 접속>>
2. CREATE USER '유저 이름'@'%' IDENTIFIED BY '비밀번호';
3. GRANT ALL PRIVILEGES ON 데이터베이스.* TO '유저 이름'@'%';
4. CREATE DATABASE 데이터베이스명;


5. dump.sql 파일 dump
mysql -u {유저 이름} -p {DB 이름} < dump.sql
=> mysql -u parkjeongwoong -p database_blog < dump.sql
```



그런데 테스트 과정에서 DB에 시간이 UTC로 저장되는 문제가 발견되었다.

Timezone 설정도 했고 MariaDB와 Ubuntu에서 모두 Timezone 설정이 KST로 나오는데도 저장은 UTC로 되었다.

결국은 SpringBoot 문제였고 new Date()를 출력했을 때 UTC가 찍히는 것을 확인했다.



이 문제는 Application.java에

```java
@PostConstruct
void setKST() {
    TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
}
```

를 추가해서 SpringBoot의 TimeZone을 Asia/Seoul로 수정하는 것으로 해결했다.



## AWS EC2, RDS 종료

마지막으로 과금을 막기 위해 EC2와 RDS를 종료했다.

과정은 다음과 같았다.

```
1. EC2 인스턴스 중지
2. EC2 인스턴스 종료 (서버 삭제)
3. EIP(Elastic IP) 릴리즈 (EIP 삭제; EIP는 받아두고 사용하지 않으면 비용이 나온다)
4. 보안그룹 삭제 (과금에는 영향이 없다)
5. 키 페어 삭제

6. RDS 삭제 (최종 스냅샷은 생성했다)
7. S3 삭제 (S3를 사용하지 않았기 때문에 따로 작업하지 않았다)
```



이로써 서버 마이그레이션이 끝났다.

이제 6월에 요금이 청구되지는 않는지 확인하고 라즈베리파이를 어떤 식으로 이용할 지 고민해 봐야겠다.
