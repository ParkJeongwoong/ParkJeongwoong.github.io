# [Spring] Build : Maven과 Gradle

## '빌드'란?

> 소스코드 -> 실행파일

빌드란 **소스코드 파일을 실행할 수 있는 소프트웨어로 변환하는 과정**을 뜻하며 <u>컴파일, 테스팅, 배포 등</u>의 모든 과정을 포함합니다.

스프링 프로젝트를 하나의 소프트웨어로써 실행하기 위해서는 프로젝트를 이루고 있는 java 소스코드 파일, xml 파일, jar 파일 등의 여러 파일을 JVM이나 톰캣과 같은 WAS가 실행할 수 있는 구조의 프로그램으로 만들어야 합니다.



빌드의 간략한 과정은 다음과 같습니다. (Maven 기준)

1. 먼저 **이전 빌드를 삭제**합니다. `clean`
2. 이후 프로젝트의 **Validation을 체크**합니다. `validate`
3. 문제가 없다면 **initialize**, 즉 **빌드 상태를 초기화**합니다. `init`
4. **소스코드를 컴파일** 합니다. `compile`
5. **테스트코드를 컴파일** 합니다. `test compile`
6. 컴파일한 테스트코드로 **단위 테스트**를 진행합니다. `test`
7. 개발자가 선택한 war, jar 등 으로 **패키징**을 합니다. `package`
   - JAR (Java Archive) : Java 프로젝트 압축 파일; 자유로운 구조로 구성 가능 (JRE만으로 실행 가능)
   - WAR (Web Application Archive) : 웹 어플리케이션 압축 파일; 웹 어플리케이션을 위한 웹 관련 자원을 포함한 구성 (톰캣과 같은 WAS로 실행 가능)
8. **통합 테스트**를 진행합니다. `integration test`
9. 패키지를 **로컬 저장소에 설치**합니다. `install`
10. 패키지를 **원격 저장소에 배포**합니다. `deploy`



## 빌드 도구

> 빌드 과정을 자동으로 수행해주는 도구

참고로 빌드 도구의 발전 과정은 'Make -> Ant -> **Maven** -> **Gradle**' 순 입니다.

오늘 소개할 Maven과 Gradle에서는 위의 <u>컴파일에서 배포까지의 빌드 과정</u>뿐만 아니라 <u>라이브러리 자동 추가 및 관리, 버전 자동 동기화 기능</u>도 함께 제공합니다.



### Maven

> POM(Project Object Model) 개념을 도입해서 빌드 과정을 간단히 자동화 & POM의 메타 데이터를 통해 의존성 관리 기능 구현

Maven 이전의 빌드 도구인 Ant는 빌드만 하는 빌드 도구이었습니다. 때문에 라이브러리를 직접 관리했어야 했는데, 프로젝트와 연관된 수많은 라이브러리와 그 라이브러리와 연관된 라이브러리들의 업데이트를 모두 관리하는 것은 굉장히 불편한 일이었습니다.

**Maven**은 `라이브러리를 자동으로 추가하고 관리하며 버전 동기화 기능까지 제공`함으로써 이런 불편함을 해소했는데 Maven의 가장 특징적인 부분은 `POM`, 즉 Project Object Model이라는 것입니다. Maven 프로젝트를 생성하면 생기는 **pom.xml**이 바로 그것인데, pom.xml을 이용하면 태그를 이용한 xml 형식으로 프로젝트와 관련된 정보와 함께 라이브러리 설정, 빌드 관련 설정을 한 번에 할 수 있습니다.



설정파일 : `pom.xml`



### Gradle

> Groovy 언어를 기반으로 만들어진 확장성이 뛰어난 빌드 도구

Gradle은 <u>정리되어 있지만 그만큼 규칙이 많고 유연하지 못한 Maven</u>과 <u>유연한 스크립트를 가졌지만 쉽게 장황해지는 Ant</u>의 장점을 모은 빌드 도구입니다. 

Gradle 에서 사용하는 Groovy는 Java와 호환되는 Java의 친척과 같은 언어로 JVM 상에서 돌아갈 수 있고 컴파일할 필요가 없는 스크립트 언어입니다. Maven은 xml 기반의 빌드를 하기 때문에 내용이 복잡해지면 가독성이 떨어지고 내용이 길어진다는 단점이 있습니다. 따라서 프로젝트 규모가 커질 수록 관리하기 어려워지는데, **Gradle**을 이용하면 같은 내용을 <u>Maven 대비 간결하고 확장성 높게 작성</u>할 수 있습니다. 또한 Gradle은 업데이트가 필요한 부분만 새로 빌드하기 때문에 Maven 보다 훨씬 빠르게 빌드할 수 있다는 장점도 가지고 있습니다. 이러한 장점들 덕분에 Gradle은 Android OS의 빌드 도구로 채택되었습니다.



설정파일 : `build.gradle`, `settings.gradle`





## 출처

https://sweeteuna.tistory.com/110

https://taes-k.github.io/2019/05/31/spring-build-tools/

https://100100e.tistory.com/390

https://www.holaxprogramming.com/2017/07/04/devops-gradle-is-faster-than-maven/

https://bkim.tistory.com/13
