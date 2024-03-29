# 동시성 관리 (Java, DB Lock)

지난 번 [동시성 관련 글](https://parkjeongwoong.github.io/articles/Failure/5)을 쓸 때 에서 DB Lock 부분에 오류가 있어서 수정 차원에서 다시 글을 쓰게 됐다.



## Java에서 제공하는 기능

### Synchronized

Thread-Safe한 동작을 위해 사용하는 키워드로 다른 스레드에서 해당 영역에 접근할 수 없게 만든다.

**즉 특정 영역을 한 스레드에서만 작업해야 할 경우 사용할 수 있다.** `(데이터 관련 작업만을 의미하진 않는다)`

예를 들면 싱글톤 패턴에서 객체를 초기화할 때 synchronized로 최초에 인스턴스를 생성하는 스레드만 객체를 초기화할 수 있도록 한다던지, 캐시 등 메모리 관련 세팅, 혹은 파일 IO 동기화 등 DB와 관련 없는 부분을 동기화할 때 사용할 수 있다.



다만 동시에 작업해도 되는 경우(ex, A날짜에 대한 예약과 B날짜에 대한 예약)에도 synchronized 함수로 예약 메서드를 구현한다면 한 스레드가 하나의 예약만 진행하는 경우가 생긴다.

또 서버가 여러 개가 되는 경우, JVM 간의 동시성 관리를 할 수 없다.

(Java 프로그램은 JVM 위에서 독립적인 인스턴스를 가지므로 하나의 JVM 위에 동일한 프로그램이 2개가 올라가더라도 독립적인 인스턴스로 동작하기 때문에 synchronized 블록이 다른 프로그램에 영향을 끼치지는 못한다)



## ReentrantLock

ReentrantLock 객체를 사용하여 원하는 지점에 명시적으로 Lock을 걸어 Thread-Safe한 작업을 만드는 방법도 있다.

기본적인 사용방법은 lock을 통해 락을 걸고 unlock을 통해 락을 해제한다.

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class Stock {
    private int count = 500;
    private final Lock lock = new ReentrantLock();

    public int store() {
        return ++this.count;
    }
    public int consume() {
        if (this.count > 0) {
            return --this.count;
        }
        return this.count;
    }
    public Lock getLock() {
        return this.lock;
    }
    public int checkCount() {
        return this.count;
    }
}

public class StockTest {
    public static void main(String[] args) {
        Stock stock = new Stock();
        for (int i=0; i<100; i++) {
            new Thread() {
                public void run() {
                    for (int j=0; j<10; j++) {
                        stock.getLock().lock();
//                        System.out.println(stock.consume());
                        System.out.println(stock.store());
                        stock.getLock().unlock();
                    }
                }
            }.start();
        }
        System.out.println("STOCK : "+stock.checkCount());
    }
}
```



생성자에 fair 값을 boolean으로 넣어주게 되면 가장 오래 기다린 스레드에 Lock을 배정해주는 작업이 추가되나 성능은 조금 떨어지게 된다.

추가적인 메서드는 다음과 같다.

- `void lock()` - Lock 잠금
- `void unlock()` - Lock 해제
- `boolean isLocked()` - Lock 확인
- `boolean tryLock()` - Lock을 얻지 못하면 false 반환
- `boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException` - 일정 시간 동안 Lock을 얻지 못하면 false 반환



### Concurrent 패키지

Concurrent 패키지에는 ReentrantLock 뿐만 아니라 다른 컬랙션들도 있는데 이런 객체들을 사용하면 Thread-Safe 한 작업을 할 수 있다.



## DB Lock

데이터에 관한 동시성 작업이라면 DB Lock이 더 나은 선택지가 될 수 있다.



### Pessimistic Lock

Pessimistic Lock은 `SELECT ~ FOR UPDATE`문을 통해 DB가 제공하는 Lock을 해당 데이터에 거는 방식이다.

**FOR UPDATE**가 있으면 다른 트랙잭션에서 **수정, 삭제, FOR UPDATE문을 통해 조회**를 할 순 없다. (다만 SELECT를 사용한 일반 조회는 가능하다)

이걸 사용하는 게 Spring Data JPA의 **PESSIMISTIC_WRITE**이다.



Spring Data JPA에서 제공하는 **PESSIMISTIC_READ**는 **FOR SHARE**문을 사용하는 방식이다.

Share Lock이 걸린 데이터는 SELECT만 실행 가능하고 UPDATE, DELETE가 불가능하다. 즉, 트랜잭션이 끝나기 전까지 조회한 데이터가 변경되지 않을 것임을 보장한다.



정리하면 다음과 같다.

- PESSIMISTIC_WRITE
  - `SELECT ~ FOR UPDATE`
  - 다른 트랜잭션의 UPDATE, DELETE, SELECT FOR UPDATE 방지
- PESSIMISTIC_READ
  - `SELECT ~ FOR SHARE`
  - 모든 트랜잭션의 UPDATE, DELETE, SELECT FOR UPDATE 방지 -> 모든 트랜잭션이 동일한 데이터를 조회함을 보장



### Optimistic Lock

Optimistic Lock은 DB가 제공하는 Lock이 아니다. Application 수준에서 확보하는 Lock으로 대표적으로 version을 사용한 방식이 있다.

즉 `UPDATE ~ WHERE version = :version` 쿼리를 보내고 affected row가 0이면 낙관적 에러 예외를 발생시킨다.

일반적으로 @Version이 사용되지만 필요한 조건이 있다면 원하는대로 수정이 가능하다. (필요에 따라서는 Spring Data JPA가 제공하는 기능의 범위를 벗어나야 할 수도 있다)

결국 특정 조건이 붙은 쿼리를 보내서 affected row가 0인지 아닌지를 확인하는 게 낙관적 잠금이기 때문이다.



1. @Version
   - version 필드를 추가하고 이를 조건으로 걸어 충돌 감지
2. @OptimisticLocking
   - 엔티티의 특정 필드를 조건문에 추가해서 충돌 감지
3. DB Procedure
   - `CREATE PROCEDURE ~` 문으로 dB에 프로시저를 미리 만들어 놓고 해당 프로시저를 사용하는 쿼리문을 사용
4. 직접 구현
   - 필요한 쿼리문을 직접 작성해서 DB로 보내고 그 결과에 대한 예외 처리를 직접 함으로 낙관적 잠금 구현



### Pessimistic vs Optimistic

이 내용은 [Stack Overflow의 글](https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking)을 참조했다.

두 잠금의 특징을 알았다면 이제 어떤 차이가 있는지 알 수 있다.

1. 비관적 잠금은 Application level에서 처리할 게 없다.
2. 대신 DB에서 Lock을 관리하는 작업이 추가되기 때문에 조금 더 많은 자원을 소모한다.
3. 또 DB가 Lock을 관리하기 때문에 Lock을 획득하지 못한 트랜잭션들이 DB에서 대기하게 된다. (Lock을 얻지 모한 여러 세션들이 계속 유지된다)



1. 낙관적 잠금은 Application level에서 Lock을 처리한다.
2. 특정 조건이 포함된 쿼리문을 보내고 그 결과를 받기 때문에 트랜잭션이 대기하지 않는다. (세션이 유지되지 않는다)



이 때문에 낙관적 락은 락으로 인한 성능 저하가 적어 성능상 이점이 있고 또 세션을 유지하지 않기 때문에 대규모 시스템에 조금 더 유리하다. 다만 충돌이 발생하면(수정에 실패하면) 예외처리를 Application에서 직접해야 한다는 단점이 생긴다.

이에 반에 비관적 락은 락으로 인한 성능 저하가 발생하고 Deadlock 위험성이 존재한다. 또 세션을 계속 유지해야 하기 때문에 대규모 시스템에선 불리할 수도 있다. 다만 DB level에서 충돌을 방지하고 데이터 일관성을 확실하게 유지한다는 장점이 생긴다.
