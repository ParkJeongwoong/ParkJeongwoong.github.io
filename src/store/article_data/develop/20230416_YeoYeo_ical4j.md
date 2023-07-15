# ical4j 파일 읽기 (+CalendarBuilder 에러)

예약 시스템을 개발하면서 플랫폼 별 예약 연동을 추가하다 마주한 에러다.



숙소 예약은 달력 형태로 관리되기 때문에 예약 정보 요청 시 ics 파일 (iCalendar 파일) 로 생성되어 전송된다.

ics 파일을 다루는 라이브러리 중 가장 일반적인 java 라이브러리는 `ical4j`이나 ics 자체가 많이 다뤄지지는 않는 것 같다.

그래서 에러 상황을 마주했을 때 해결하기가 까다웠다.



## 발생 과정

1. 의존성 추가

**implementation('org.mnode.ical4j:ical4j:3.0.19')** 를 이용해 gradle로 의존성을 추가했다.

2. CalendarService

```java
private void readIcalendarFile(String path) {
    try {
        FileInputStream fileInputStream =new FileInputStream(path);
        CalendarBuilder builder = new CalendarBuilder();
        Calendar calendar = builder.build(fileInputStream);
        List<CalendarComponent> events = calendar.getComponents(Component.VEVENT);
        for (CalendarComponent event : events) {
            log.info(event.toString());
        }

    } catch (FileNotFoundException e) {
        log.error("readIcalendarFile : input File Not Found", e);
    } catch (ParserException|IOException e) {
        log.error("readIcalendarFile : CalendarBuilder Build Fail", e);
    }
}
```

ics 파일을 읽는 코드를 작성했다.

3. **에러 발생** - `ical4j.properties` 필요

`ical4j.properties not found` 예외가 발생했다.

구글링과 chatGPT를 참고해 추가해줬다.

4. **에러 발생** - `cache` 필요

`java.lang.ClassNotFoundException: javax.cache.configuration.Configuration`

`javax.cache.CacheException: No CachingProviders have been configured`

`Parameter 0 of method openEntityManagerInViewInterceptorConfigurer in org.springframework.boot.autoconfigure.orm.jpa.JpaBaseConfiguration$JpaWebConfiguration required a bean named 'cacheManager' that could not be found.`

등등 cache 관련 예외가 계속 발생했다. (한 두가지가 아니었기 때문에 전부 기술할 순 없다.)

예외가 발생하는 원인을 찾아 라이브러리를 타고 올라가며 읽어보니,

`new Calendar Builder();`

여기서 TimeZoneLoader 를 사용할 때 캐시가 필요한 것 같은데 없다고 했다.

이후 javax.cache, ehcache 등을 사용하며 여러 삽질을 했지만 해결될 기미가 안 보였다.



## 해결

해결 방법은 매우 간단했다.

**버전이 너무 낮았던 게 문제였다.**

아무리 찾아봐도 해결책이 안 보였는데, 혹시나 싶어 **3.2.11 버전** 으로 바꾸니 아무 문제 없지 잘 작동됐다.



## 요약

ical4j를 사용해 ics 파일을 읽는 법은 다음과 같다.

1. **ical4j 의존성을 추가한다. (꼭 최신 버전일 필요는 없지만 옛날 버전은 문제가 발생할 수 있으니 주의)** -> 이번 에러의 원인

2. CalendarBuilder를 이용해 ics 파일을 읽는다.

3. Calendar 파일에서 요소를 하나씩 꺼내 읽는다.