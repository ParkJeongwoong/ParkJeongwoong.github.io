# JPA Save 메서드 트러블슈팅 (repository.save가 return한 객체가 저장한 entity와 다른 경우)

## 배경

현재 예약 데이터의 구조는 Reservation가 Guest를 참조하고 있다.

Guest는 Not null이어야 하기 때문에 모든 Reservation은 하나의 Guest를 가지고 있지만 Guest 테이블 상에서 Reservation을 가리키는 컬럼은 없다.



어느날 어떤 Reservation도 참조하지 않는, Reservation - Guest 관계가 없는 Guest 데이터를 확인했고 확인해보니 외부 플랫폼(에어비앤비, 부킹닷컴)에서 동기화 된 예약 데이터들이 었다.

이 데이터들은 Reservation에 연결된 Guest들과 똑같았고, **데이터 연동 과정에서 하나의 Reservation 마다 2개의 Guest 가 생성된 것을 확인했다.**

(+ 추가적으로 관리자가 수동으로 생성한 예약 정보도 Guest가 2개씩 있는 걸 확인했다)



## Reservation 생성 과정

Reservation은 2가지 방식으로 생성된다.

1. 예약 -> 결제 과정을 거치는 경우
   1. 고객 정보를 입력하고 예약 버튼을 누르면 **예약시간을 ID로 가지는 Reservation과 Guest 가 생성된다.** -> createReservation() 메서드
   2. 결제를 완료하면 **Payment 가 생성되고 Reservation과 연결된다.** -> setReservationPaid() 메서드
2. 예약,결제 가 한번에 진행되는 경우
   1. 외부 플랫폼 연동 or 관리자가 직접 예약을 생성하는 경우 createReservation()과 setReservationPaid()가 하나의 Transaction 안에서 순서대로 실행되며 Reservation, Guest, Payment가 모두 생성된다.



## 실행된 쿼리

실행된 쿼리문을 보니 createReservation()에서 INSERT INTO GUEST 문, INSERT INTO RESERVATION 문이 실행되고

setReservationPaid()에서 INSERT INTO GUEST문, INSERT INTO PAYMENT 문, UPDATE RESERVATION 문이 실행됨을 확인했다.



왜 GUEST가 2번 INSERT 됐을까?



## 해결

일단 JPA가 createReservation의 repository.save(reservation) 을 실행할 때의 reservation과 setReservationPaid()의 repository.save(reservation) 을 실행할 때의 reservation을 서로 다른 객체라고 인식해서 GUEST를 다시 넣는 거라고 생각했고

reservation과 respository.save(reservation)이 return하는 결과물의 주소를 찍어보니 서로 다른 주소값이 나왔다.

영속성 컨텍스트에 객체가 영속되어 있다면 같은 값이 나와야 했는데 이상했다.



```java
@Transactional
public Reservation reserve(...) {
    Reservation reservation = createReservation();
    ...
    setReservationPaid(reservation);
    return reservation;
}

@Transactional
private Reservation createReservation(...) {
    ...
    Reservation reservation = Reservation.builder().build();
    reservationRepository.save(reservation); // 수정할 부분
    return reservation;
}

@Transactional
private void setReservationPaid(...) {
    ...
    reservation.setPayment(payment);
    reservationRepository.save(reservation);
}
```

을

```java
@Transactional
public Reservation reserve(...) {
    Reservation reservation = createReservation();
    ...
    setReservationPaid(reservation);
    return reservation;
}

private Reservation createReservation(...) {
    ...
    Reservation reservation = Reservation.builder().build();
    reservation = reservationRepository.save(reservation); // 수정한 부분
    return reservation;    
}

@Transactional
private void setReservationPaid(...) {
    ...
    reservation.setPayment(payment);
    reservationRepository.save(reservation);
}
```

로 수정했고 문제가 해결됐다.



## 원인

문제는 해결됐지만 원인을 알 수 없었다.

save 메서드는

```java
@Transactional
@Override
public <S extends T> S save(S entity) {

    Assert.notNull(entity, "Entity must not be null");

    if (entityInformation.isNew(entity)) {
        em.persist(entity);
        return entity;
    } else {
        return em.merge(entity);
    }
}
```

이렇게 되어있고 입력한 entity와 save가 return한 값이 달랐으므로 persist가 아니라 merge가 일어났음을 알 수 있다.

그럼 merge가 발생한 원인은 무엇일까?

저장하려는 entity가 새로운 entity가 아니라는 거다.

그러고보니 첫 번째 save문에서 INSERT문을 실행하기 전 SELECT문이 먼저 실행됐었다.

왜 이런 일이 발생했을까?



힌트는 글 초반에 언급했던 `예약시간을 ID로 가지는 Reservation과 Guest` 라는 문구이다.



**JPA는 entity에 ID값이 없으면 새로운 entity로 판단하고, 그렇지 않으면 SELECT문을 실행시키고 merge한다** (정확히는 null이거나, primitive number 클래스가 0인 경우)

Reservation의 ID 값은 예약 시간이기 때문에 save 시점에 새로운 entity가 아니라고 판단하고 merge를 실행한 거였다.