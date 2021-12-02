# [Spring] Controller 객체

오늘은 비즈니스 로직이 들어가 있는 Controller 객체에 대해 알아보겠습니다.



## URL 매핑 - `@RequestMapping`

사용자가 요청을 보내면 <u>(1) Dispatcher Servlet</u>이 <u>(2) HandlerMapping</u> 을 통해 적합한 Controller를 찾습니다. 

HandlerMapping의 방법엔 여러가지가 있는데 `@RequestMapping`은 그 중 하나인 **RequestMappingHandlerMapping** 방법에서 적합한 Controller 객체를 찾는 어노테이션입니다.

```java
@Controller
@RequestMapping("/member")
public class MemberController {
	...    
}
```



@RequestMapping이 붙은 클래스 안에 @RequestMapping을 붙여 계층화를 이룰 수도 있습니다.

```java
@Controller
@RequestMapping("/member")
public class MemberController {
    @RequestMapping("/memJoin")
    public String memJoin() {}
}
```



## 요청 파라미터 처리

사용자가 전달하는 HTTP 전송 정보를 Controller에서 사용하는 방법은 여러가지가 있습니다.



예시)

```html
<input type="text" name="memID">
<input type="password" name="memPW">
```

위과 같은 HTML 파일의 input 정보를 사용자가 전달한다고 가정하면 다음과 같은 방법으로 Controller에서 이를 활용할 수 있습니다.



### 방법1) `HttpServletRequest`

1. 먼저 **HttpServletRequest Class**를 이용해 <u>Request 정보 전체를 파라미터로 받습니다.</u>

```java
@RequestMapping(value="/memLogin", method=RequestMethod.POST)
public String memLogin(Model model, HttpServletRequest request) {
    ...
}
```

2. 그리고 HttpServletRequest 클래스로 받은 파라미터 객체에서 <u>Getter를 이용해 개별 정보를 출력합니다.</u>

```java
@RequestMapping(value="/memLogin", method=RequestMethod.POST)
public String memLogin(Model model, HttpServletRequest request) {
    
    String memID = request.getParameter("memID");
    String memPW = request.getParameter("memPW");
    
}
```



### 방법2) `@RequestParam`

1. 또 다른 방법은 **@RequestParam 어노테이션**을 객체에 붙여 <u>Request 정보를 개별적인 파라미터로 받는 것</u>이 있습니다.

```java
@RequestMapping(value="/memLogin", method=RequestMethod.POST)
public String memLogin(Model model, @RequestParam("memID") String memID, @RequestParam("memPW") String memPW) {
    ...
}
```

이 경우 Getter를 이용하지 않지만 메소드의 파라미터 정의 부분이 길어져 보기 지저분하다는 단점이 있습니다.



>  @RequestParam(..., **require=false**) : 값이 넘어오지 않아도 Exception 발생 X

>  @RequestParam(..., **defaultValue=""**) : 값이 넘어오지 않았을 때 들어가는 값



### 방법3) `커맨드 객체` * 가장 많이 사용하는 방법

마지막은 가장 많이 사용하는 방법인 커맨드 객체를 활용하는 방법입니다.

1. 먼저 데이터를 받기 위한 <u>전용 Class</u>를 따로 만들어 줍니다.

```java
public class Member {
    
    private String memID;
    private String memPW;
    
    public String getMemID() {
        return memID;
    }
    public void setMemID(String memID) {
        this.memID = memID;
    }
    public String getMemPW() {
        return memPW;
    }
    public void setMemID(String memPW) {
        this.memPW = memPW;
    }
    
}
```

(ex. Member.java 안에 만든 Member 클래스)

2. <u>Request 정보를 새롭게 만든 객체에 저장</u>, 이후 <u>Class 내 직접 만든 Getter를 이용해 Data를 출력합니다.</u>

```java
@RequestMapping(value="/memLogin", method=RequestMethod.POST)
public String memLogin(Member member) {
    ...
}
```

(ex. MemberController.java)



#### `@ModelAttribute`

`@ModelAttribute` 어노테이션은 파라미터인 파라미터인 <u>커맨드 객체에</u> 붙어 **커맨드 객체의 이름**을 설정합니다.

이후 **View(JSP)**에서 커맨드 객체를 참조할 때 변경된 이름을 통해 객체의 값을 불러올 수 있습니다.



[@ModelAttribute 미사용]

```java
public String test1(MyModel mym) {}
```

```jsp
${mym.id}
```

- mym 객체를 View에서 불러올 때, mym 객체의 이름을 그대로 사용



[@ModelAttribute 사용]

```java
public String test2(@ModelAttribute("mymy") MyModel mym) {}
```

```jsp
${mymy.id}
```

- mymy라는 이름으로 mym 객체를 View에서 불러옴



#### `@RequestBody`, `@RequestParam`

- **@ModelAttribute** : HTTP 정보를 Model(객체)에 주입합니다.
  - '생성자'나 'Setter'를 통해 주입 (만약 생성자나 Setter가 없으면 Mapping 되지 않습니다)
  - HTTP Parameter의 타입 - 객체의 타입 검증 과정이 존재 (두 타입이 일치하지 않으면 BindException이 발생합니다)
- **@RequestBody** : JSON 형태로 오는 HTTP Body의 정보를 Java의 객체로 변환시킵니다.
- **@RequestParam** : <u>1개의 HTTP 요청 파라미터</u>를 받습니다.
  - 기본적으로 **required=true**로 설정 (해당 파라미터가 없으면 400 Error를 반환합니다)



## 데이터 타입

> 커맨드 객체의 데이터 타입

```html
<input type="text" name="memId">
<input type="password" name="memPw">
<input type="text" name="memAge" size="4" value="0">
```

이런 input data를 받았을 때,

```java
public class Member {
    private String memId;
    private String memPw;
    private int memAge;
}
```

당연하게도 커맨드 객체에서 원하는 데이터 타입으로 저장할 수 있습니다.



만약 input data 여러 개를 하나의 변수에 저장해야 한다면 List 타입에 저장을 하면 됩니다.

```html
PHONE1 : 
<input type="text" name="memPhones[0].memPhone1" size="5">
<input type="text" name="memPhones[0].memPhone2" size="5">
<input type="text" name="memPhones[0].memPhone3" size="5">

PHONE2 : 
<input type="text" name="memPhones[1].memPhone1" size="5">
<input type="text" name="memPhones[1].memPhone2" size="5">
<input type="text" name="memPhones[1].memPhone3" size="5">
```

```java
private List<MemPhone> memPhones;
```



- **memPhone1** + **memPhone2** + **memPhone3** => `memPhone` 클래스
- **memPhone** + **memPhone** => `List<memPhone> memPhones` ; memPhone이 모인 List, memPhones



## Model & ModelAndView

`Model`과 `ModelAndView` 모두 <u>View에 데이터를 전달</u>하기 위해 **Controller에서 사용되는 객체**입니다.

차이 점은 `Model`은 **데이터만** 전달하지만, `ModelAndView`는 **데이터와 뷰의 이름**을 함께 전달한다는 것입니다.



비교를 위한 코드입니다.

(**memModifyOk.jsp**라는 View에서 **${memBef.memId}**, **${memAft.memId}**라는 이름으로 데이터를 사용하기 위한 `Model`과 `ModelAndView` 코드)

```java
// Model
@RequestMapping(value = "/memModify", method = RequestMethod.POST)
public String memModify(Model model, Member member) {
    Member[] members = service.memberModify(member);
    
    model.addAttribute("memBef", members[0]);
    model.addAttribute("memAft", members[1]);
    
    return "memModifyOk";
}
```

```java
// ModelAndView
@RequestMapping(value = "/memModify", method = RequestMethod.POST)
public ModelAndView memModify(Member member) {
	Member[] members = service.memberModify(member);
    
    ModelAndView mav = new ModelAndView();
    mav.addObject("memBef", members[0]);
    mav.addObject("memAft", members[1]);
    
    mav.setViewName("memModifyOk");
    
    return mav;
}
```





## 출처

인프런 - 자바 스프링 프레임워크(renew ver.) - 신입 프로그래머를 위한 강좌

http://wonwoo.ml/index.php/post/2308

https://mangkyu.tistory.com/72
