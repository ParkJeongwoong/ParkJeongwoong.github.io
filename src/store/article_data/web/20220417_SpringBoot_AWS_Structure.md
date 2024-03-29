# [Spring Boot 프로젝트] 스프링 코드 구조 알아보기

[**스프링 부트와 AWS로 혼자 구현하는 웹 서비스**]를 참고하여 만들었던 코드를 바탕으로 **스프링 부트로 서버를 어떻게 구성해야 할 지 알아보고자 한다.**

(당연히 반드시 이렇게 해야 하는 것은 아니며, 프로젝트 구조를 이런 식으로 구현할 수 았다고 참고만 하면 된다)

## src

### main

[java - 프로젝트명]을 타고 내려가다보면 다음과 같이 구성되어 있다.

- Application.java : 메인 실행파일. 이걸 실행시키면 전체 어플리케이션이 구동

- **config** : JpaConfig, WebConfig, Auth 관련 파일 존재
- **domian** : Entity, Repository(DAO) 존재
- **service** : Service 파일이 존재
- **web** : DTO, Controller 파일 존재



#### config

```
configuration 설정을 위한 폴더
```

resource에 있는 xml 파일을 대체하는 설정파일이 존재

- 여기 있는 파일들은 @Configuration 어노테이션이 붙어있음
  - "Applcation.java" -> "@SpringBootApplication" -> "@EnableAutoConfiguration" 가 실행되면서 설정파일로 등록



#### domain

```
Entity, Repository|DAO가 있는 폴더
```

데이터와 관련된 정보가 존재

- Repository와 DAO 모두 DB에 접근해서 데이터를 가져오는 기능을 하지만 두 객체는 엄밀히 말하면 차이가 있다.
  - DAO는 실제 DB에 접근하는 객체 (인프라 계층에 가까움)
    - DB에 가까운 객체 => DB를 변경하면 DAO도 수정되어야 함
  - Repository는 객체의 상태를 관리하는 저장소 (인터페이스는 도메인 계층 / 구현체는 인프라 계층에 존재)
    - Repository는 메모리에 가상의 Collection 객체(List, Set, Map 같은)가 있다고 가정하고 여기에 데이터(객체)를 넣고 빼는 것처럼 동작



#### service

```
Service.java가 있는 폴더
```



#### web

```
Controller.java와 DTO 폴더가 있는 폴더 
```



### test

원래는 어플리케이션의 모든 기능을 테스트해야 하지만 이 프로젝트 중에는 domain과 web에 대해서만 테스트를 진행했었다.



#### domain

- Repository가 정상 동작하는지 테스트



#### web

- Controller가 정상 동작하는지 테스트
- DTO가 정상 동작하는지 테스트



---

## 각 요소의 동작 과정

![image-20220417173122572](../../../../public/assets/image-20220417173122572.png)

1. Controller에서 요청에 대응하는 Service의 함수 실행
2. Service에서 요청에 대응하는 Repository의 함수 실행
3. Repository에서 요청에 대응하는 데이터 작업 수행
4. Service에서 작업 결과를 반환
5. Controller에서 응답 내용을 반환





## 출처

- 스프링 부트와 AWS로 혼자 구현하는 웹 서비스