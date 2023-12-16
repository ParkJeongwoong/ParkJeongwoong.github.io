# remember-me 동작 안 함

## 문제상황

한옥스테이 여여의 개선 작업 중 무중단 배포 이후에 한 것은 **로그인 유지**였다.

이전에는 Spring Security를 이용한 세션 방식의 로그인 with 세션 쿠키였기 때문에 세션이 끊어질 때마다 로그인이 풀렸는데, 부모님이 매번 로그인하기 너무 피곤하다고 하셔서 개선에 들어갔다.

Spring Security의 remember-me 기능을 이용하면 손쉽게 영구쿠키를 사용할 수 있다고 해서 썼는데... 차라리 직접 구현하는 게 나을 뻔 했다.

**"remember-me" 쿠키가 응답 헤더에 포함되지 않았고** 이를 해결하기 위해 여러 삽질을 해야 했다.



## 원인

결론부터 말하자면 POST 요청으로 로그인을 구현했기 때문이다.

1. Spring Security에서 기본적으로 제공하는 로그인은 GET 요청이다.
2. GET 요청으로 아이디와 비밀번호를 넘겨주는 게 보안상 좋지 않다고 생각해 POST 요청으로 바꾸기로 결정했다.
3. 이를 위해 ApiAuthenticationFilter를 만들고 이 필터에서 body에 들어있는 Json 데이터를 추출해 authenticate()를 실행했다.
4. remember-me를 도입하면서 보안상 alwaysRemeber는 당연히 false로 설정했다.
5. **remember-me는 Spring Security에서 제공하는 기능이라 GET 요청을 기본으로 전제한다.**
6. RemeberMeServices로 `PersistentTokenBasedRememberMeServices` 구현체를 썼는데 부모 클래스인 `AbstractRememberMeServices`의 loginSuccess()에서 rememberMeRequested()를 호출하고 여기서 **request.getParameter(parameter)** 를 이용하여 remember-me가 true인지 false인지 확인한다.
7. 그리고 remember-me 파라미터가 true인 경우 remember-me 쿠키를 응답에 넣어보낸다.



여기서 5번, 6번이 문제였다.

request.getParameter()로는 POST 요청의 Body 안에 있는 파라미터를 가져올 수 없었다.

또 HttpServletRequest는 setParameter()가 따로 없어서 미리 파라미터를 설정할 수도 없었다.



## 과정

아무리 봐도 문제점을 못 찾겠었는데 우연히 **setAlwaysRemember를 true**로 설정해보니 처음으로 정상 동작을 했다.

이를 계기로 remember-me 파라미터를 제대로 가져오지 못하고 있다는 생각하고 PersistentTokenBasedRememberMeServices와 AbstractRememberMeServices 클래스의 메서드를 읽어 원인을 찾아냈다.



## 해결

PersistentTokenBasedRememberMeServices를 상속받는 `CustomPersistentTokenBasedRememberMeServices`을 만들고 customLoginSuccess()를 만들어 POST 요청의 remember-me 로그인을 처리했다. (loginSuccess()가 final이라 수정할 수가 없었다.)

* 따라치지 않고 자꾸 조금씩 바꿔보면서 테스트하는 습관이 있어서 remember-me 적용 파라미터를 remember-me가 아니라 remeber로 바꿨다.

```java
// ApiAuthenticationFilter.java
public Authentication attemptAuthentication(...) {
    ...
    Boolean remember = (Boolean) parsedJsonMap.get("remember");
    
    UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(userId, userPassword);
    authRequest.setDetails(remember);
    
	Authentication authentication = super.getAuthenticationManager().authenticate(authRequest);
    ((CustomPersistentTokenBasedRememberMeServices) getRememberMeServices()).customLoginSuccess(request, response, authentication);
    
    return authentication;
}

// CustomPersistentTokenBasedRememberMeServices.java
public void customLoginSuccess(HttpServletRequest request, HttpServletResponse response, Authentication successfulAuthentication) {
    if (successfulAuthentication.isAuthenticated() && (Boolean) successfulAuthentication.getDetails()) {
        super.onLoginSuccess(request, response, successfulAuthentication);
    }
}
```

