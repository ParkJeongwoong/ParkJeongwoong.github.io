# Java Thread.run()과 Thread.start()의 차이

이벤트 루프를 만들면서 생긴 일이다.

Thread 클래스를 상속받은 Loop 클래스를 만들고 run() 메서드를 구현했다.

이벤트 루프 작업을 위해 run() 메서드 안에는 무한루프 문이 있었는데, @PostConstruct 어노테이션을 붙인 init() 메서드에서 Thread.run()을 실행시키니 스프링 어플리케이션의 다른 기능이 동작하지 않는 문제가 생겼다.

요청도 안 받아지고 무한루프 문 외에는 아무 것도 동작하지 않았다.

Thread를 새로 만들어 할당해보기도 하고 여러 방법을 시도해 봤지만 소용없었다.

이는 내가 Thread 클래스의 run()과 start()의 차이를 몰랐기 때문이다.



## run()

Thread 클래스의 run() 메서드를 찾아보면 다음과 같이 나온다.

```java
@Override
public void run() {
   if (target != null) {
      target.run();
   }
}
```



## start()

그리고 start() 메서드는 다음과 같다.

```java
public synchronized void start() {
   /**
   * This method is not invoked for the main method thread or "system"
   * group threads created/set up by the VM. Any new functionality added
   * to this method in the future may have to also be added to the VM.
   *
   * A zero status value corresponds to state "NEW".
   */
   if (threadStatus != 0)
      throw new IllegalThreadStateException();

   /* Notify the group that this thread is about to be started
   * so that it can be added to the group's list of threads
   * and the group's unstarted count can be decremented. */
   group.add(this);

   boolean started = false;
   try {
      start0();
      started = true;
   } finally {
      try {
            if (!started) {
               group.threadStartFailed(this);
            }
      } catch (Throwable ignore) {
            /* do nothing. If start0 threw a Throwable then
            it will be passed up the call stack */
      }
   }
}
```



## 결론

즉 run()은 단순히 메서드를 실행하고 끝이고

start()는 **native 함수인 start0()를 사용해서 멀티스레드 환경을 생성한 뒤 run() 메서드를 호출한다.**

즉 Thread 클래스를 제대로 활용하려면 run()이 아니라 start()를 호출해야 한다.



## 비교

- run() : 싱글 스레드 / 단순 메서드 호출 / 메인 스레드의 stack 영역 차지 -> 끝나기 전까지 다른 메서드 호출 불가
- start() : 멀티 스레드 / 네이티브 메서드 호출 / 새로운 스레드를 생성 후 stack 영역 차지 -> 독립적으로 동작 가능