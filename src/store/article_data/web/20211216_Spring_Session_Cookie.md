# [Spring] 세션 & 쿠키

HTTP 프로토콜은 기본적으로 클라이언트와 서버 간의 연결이 유지되지 않습니다.

로그인과 같이 지속적인 연결이 필요한 경우 **세션**과 **쿠키**를 이용해 HTTP 프로토콜에서 서버와 클라이언트 간의 연결을 유지할 수 있습니다.



## 세션 vs 쿠키

세션과 쿠키의 차이점은 <u>연결 정보를 누가 관리하느냐</u> 입니다.

- `세션` - **서버**에서 연결 정보를 관리
- `쿠키` - **클라이언트**에서 연결 정보를 관리



## 세션

> 서버에서 연결 정보를 관리

### Flow

로그인을 예시로 한 **세션을 통한 연결 Flow**는 다음과 같습니다.

>1. 로그인 요청 - <로그인 정보 저장>
>2. **setAttirbute**("member", mem)
>   - member 속성 저장
>3. 응답
>4. 일반 요청 - <로그인 정보 확인>
>5. **getAttribute**("member", mem)
>   - member 속성 반환
>6. 응답
>7. 로그아웃 - <로그인 정보 삭제>
>8. **invalidate()**



### 세션 등록

세션에 정보를 저장하는 방법에는 1) <u>HttpSession을 매개변수로 받아 세션에 등록하는 방법</u>과 2) <u>HttpServletRequest을 매개변수로 받아 세션에 등록하는 방법</u>이 있습니다.



#### HttpSession

> Controller의 메소드에서 Parameter로 HttpSession 객체를 받아 setAttribute()

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

    @RequestMapping(value = "/login", method = RequestMethod.POST)
	public String memLogin(Member member, HttpSession session) {
        
    	Member mem = service.memberSearch(member);
        
    	session.setAttribute("member", mem);
    
    	return "/member/loginOk";
	}
    
    ...
        
}   
```

1. 인자로 HttpSession 객체를 받기
2. 함께 인자로 받은 클라이언트의 정보가 담긴 객체를 DAO 객체의 Method에 넣어 DB와 연동된 객체를 얻기
3. DB와 연동된 객체를 value로 `setAttribute(key, value)`를 이용해 세션에 저장



- 인자로 HttpSession 객체를 받으면서 클라이언트를 식별하는 ID가 생성되어 HttpSession 객체에 담깁니다.

  **(1)** <u>쿠키나 URL로부터 세션 ID를 만들어</u> **(2)** <u>서버에 저장된 세션 ID 목록과 비교</u> **(3)** <u>일치하는 세션 객체가 있다면 그 객체를 반환, 없다면 새로운 세션 객체를 생성</u>

- HttpSession 객체는 key-value 형태로 데이터를 저장. setAttribute(key, value)를 통해서 해당 Session ID에 Key, Value 저장됩니다.



#### HttpServletRequest

> Controller의 메소드에서 Parameter로 HttpServletRequest를 받고, getSession()으로 HttpSession 객체를 얻고 setAttribute()

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String memLogin(Member member, HttpServletRequest request) {
        
	    Member mem = service.memberSearch(member);
    
    	HttpSession session = request.getSession();
    	session.setAttribute("member", mem);
    
    	return "/member/loginOk";
	}
    
    ...
        
}
```

(위의 방법을 두 단계로 나눈 형태; 바로 HttpSession을 꺼내 쓰지 않고 Web Container가 생성한 HttpServletRequest를 인자로 받고 거기서 HttpSession을 추출 )

1. 인자로 HttpServletRequest 객체를 받기
2. 함께 인자로 받은 클라이언트의 정보가 담긴 객체를 DAO 객체의 Method에 넣어 DB와 연동된 객체를 얻기
3. HttpServletRequest 객체로부터 getSession을 이용해 HttpSession 객체를 받기
4. DB와 연동된 객체를 value로 `setAttribute(key, value)`를 이용해 세션에 저장



- WAS의 Web Container가 생성하는 HttpServletRequest 객체가 인자로 들어옵니다.
- HttpServletRequest 객체에 포함되어 있는 세션 정보를 getSession()을 이용해 가져옵니다.



##### 그럼 왜 HttpServletRequest를 쓰나요?

'어짜피 HttpSession에 담을 건데'라고 생각할 수도 있습니다.

**HttpServletRequest**는 Session 뿐만 아니라 요청 자체를 담기 때문에 getSession() 외에 getParameter() 등의 메소드를 통해 파라미터, 쿠키, 헤더 정보 등에도 접근 할 수 있습니다.

따라서 요청에 담긴 다양한 정보를 활용해야 한다면 HttpServletRequest가 더 적절합니다.



##### getSession()

- `getSession(true)` : (default) 세션이 있다면 해당 세션을 반환하고 세션이 없으면 새로운 세션을 생성합니다.
- `getSession(false)` : 세션이 있다면 해당 세션을 반환하고 세션이 없으면 null 값을 반환합니다.



##### HttpServletResponse

HttpServletRequest는 Web Container가 서블릿에 넘겨주기 위해 <u>클라이언트로부터 받은 요청 정보을 저장한 객체</u>입니다.

마찬가지로 HttpServletResponse는 Web Container가 서블릿에서 넘겨받은 <u>클라이언트로 보낼 응답 정보를 저장한 객체</u>입니다.



### 세션 조회

> HttpSession 객체를 getAttribute()

세션을 조회할 때도 등록할 때처럼 <u>HttpSession</u>와 <u>HttpServletRequest</u>를 모두 사용할 수 있습니다.

1. **HttpSession**

```java
@RequestMapping(value = "/modifyForm", method = RequestMethod.GET)@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

	@RequestMapping(value = "/modifyForm", method = RequestMethod.GET)
	public String memLogin(Member member, HttpSession session) {
        
		Member member = (Member) session.getAttribute("member");
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("member", service.memberSearch(member));
		mav.setViewName("/member/modifyForm");
		return mav;
	}
    
    ...
        
}
```

> HttpSession 객체를 받아서 `getAttribute(key)`를 이용해서 세션 조회

2. **HttpServletRequest**

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

	@RequestMapping(value = "/modifyForm", method = RequestMethod.GET)
	public ModelAndView modifyForm(HttpServletRequest request) {
        
		HttpSession session = request.getSession();
		Member member = (Member) session.getAttribute("member");
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("member", service.memberSearch(member));
		mav.setViewName("/member/modifyForm");
		return mav;
	}
    
    ...
        
}
```

> HttpServletRequest를 인자로 받고 거기서 HttpSession을 추출, 이후 `getAttribute(key)`를 이용해서 세션 조회



- 클라이언트가 제공한 쿠키나 URL을 통해 세션 ID를 만들고 해당 세션 ID와 일치하는 세션 객체를 HttpSession에 담습니다.
- **getAttribute(key)**를 이용해 해당 세션 ID를 가진 객체에 저장된 Value값을 얻습니다.



### 세션 삭제

> HttpSession 객체를 invalidate()

저장된 세션을 삭제할 때도 마찬가지로 <u>HttpSession</u>를 이용한 방법과 <u>HttpServletRequest</u>를 이용한 방법이 모두 존재합니다.

1. **HttpSession**

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

	@RequestMapping("/logout")
	public String memLogout(Member member, HttpSession session) {
        
		session.invalidate();
		
		return "/member/logoutOk";
	}
    
    ...
        
}
```

2. **HttpServletRequest**

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    
    ...

	@RequestMapping("/logout")
	public String memLogout(Member member, HttpServletRequest request) {
        
		HttpSession session = request.getSession();
		session.invalidate();
		
		return "/member/logoutOk";
	}
    
    ...
        
}
```



### HttpSession의 주요 Method

| Method                   | 기능                           |
| ------------------------ | ------------------------------ |
| getId()                  | 세션 ID를 반환                 |
| setAttribute()           | 세션 객체에 속성을 저장        |
| getAttribute()           | 세션 객체에 저장된 속성을 반환 |
| removeAttribute()        | 세션 객체에 저장된 속성을 제거 |
| setMaxInactiveInterval() | 세션 객체의 유지시간을 설정    |
| getMaxInactiveInterval() | 세션 객체의 유지시간을 반환    |
| invalidate()             | 세션 객체의 모든 정보를 삭제   |





## 쿠키

> 클라이언트에서 연결 정보를 관리

쿠키를 사용하려면 클라이언트에게 쿠키를 전달하기 위해 쿠키를 담을 응답 정보 객체, 즉 HttpServletResponse가 필요합니다.

### 쿠키 생성

```java
@Controller
@RequestMapping("/mall")
public class MallController {
    
    ...
	
	@RequestMapping("/main")
    public String mallMain(Mall mall, HttpServletResponse response){

        Cookie genderCookie = new Cookie("gender", mall.getGender());

        if(mall.isCookieDel()) {
            genderCookie.setMaxAge(0);
            mall.setGender(null);
        } else {
            genderCookie.setMaxAge(60*60*24*30);
        }

        response.addCookie(genderCookie);

        return "/mall/main";

    }
    
    ...
	
}
```

1. **HttpServletResponse** 를 파라미터로 받습니다.
2. Cookie 객체를 생성합니다.
   - 첫 번째 인자는 **쿠키의 이름**, 두 번째 인자는 **쿠키의 값**
3. 클라이언트가 보낸 객체에 Cookie가 삭제되었으면, 생성한 Cookie 객체의 유지기간을 0으로 설정합니다. => 더 이상 쿠키를 사용해 서버와 연결이 불가능
   - 만약 클라이언트가 보낸 객체에 Cookie가 존재하면 생성한 Cookie 객체의 유지기간을 정해진 값으로 설정합니다.
4. 응답 객체인 response에 새로운 Cookie를 추가합니다.



### 쿠키 조회

```java
@Controller
@RequestMapping("/mall")
public class MallController {
    
    ...
	
    @RequestMapping("/index")
    public String mallIndex(Mall mall, @CookieValue(value="gender", required=false) Cookie genderCookie, HttpServletRequest request) {

        if(genderCookie != null) 
            mall.setGender(genderCookie.getValue());

        return "/mall/index";
    }
	
    ...
	
}
```

1. `@CookieValue`를 사용해서 클라이언트의 요청에 담긴 쿠키를 인자로 받을 수 있습니다.
   - value : 쿠키의 이름 (생성자에서 첫 번째 인자로 준 key값)
   - required : 필수여부 (default 값은 true이며 쿠키가 없으면 Exception을 발생시킴)

2. 만약 Cookie가 존재한다면? => 수행할 작업을 진행합니다.



#### 모든 쿠키 조회

@CookieValue를 이용하면 필요한 쿠키만 조회할 수 있습니다. 만약 요청에 담긴 모든 쿠키에 대한 조회가 필요하다면 `getCookies()`를 이용하면 HttpServletRequest에 담긴 쿠키를 모두 조회할 수 있습니다.

```java
@Controller
@RequestMapping("/mall")
public class MallController {
    
    ...
	
	@RequestMapping(value="/index")
	public String mallIndex(Mall mall, HttpServletRequest request){
	
    	Cookie[] CookieList = request.getCookies(); // 모든 쿠키 가져오기
    
		if(CookieList != null) {
			for(int i=0; i<CookieList.length; i++){
				Cookie cookieItem = CookieList[i]; // 객체 생성
				String name = cookieItem.getName(); // 쿠키 이름 가져오기
				String value = cookieItem.getValue(); // 쿠키 값 가져오기
                
                if (name=="gender")
                    mall.setGender(value);
			}
		}
	}
    
    ...
	
}
```



### 쿠키 제거

쿠키는 클라이언트에 저장되기 때문에 서버에서는 쿠키를 제거할 수 없습니다. 따라서 쿠키를 제거하기 위해선 클라이언트에 제거 요청을 보내야 합니다.

```java
@Controller
@RequestMapping("/mall")
public class MallController {
    
    ...
	
    @RequestMapping(value="/", method=RequestMethod.GET)
    public String testCookie(HttpServletResponse response){

      Cookie genderCookie = new Cookie("gender", null);
      genderCookie.setMaxAge(0);
      response.addCookie(genderCookie);
    }
    
    ...
    
}
```

1. 아무런 값이 없는 Cookie 객체를 생성합니다.
2. 해당 쿠키의 유효기간을 0으로 설정합니다.
3. 응답 객체인 response에 값이 없는 Cookie를 추가해서 해당 이름을 가진 쿠키를 더이상 사용할 수 없도록 만듭니다.





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌

https://honeyinfo7.tistory.com/130

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=iq_up&logNo=100032247144

https://tecoble.techcourse.co.kr/post/2021-05-23-servlet-servletcontainer/

https://developer-hm.tistory.com/19

https://kingle1024.tistory.com/94
