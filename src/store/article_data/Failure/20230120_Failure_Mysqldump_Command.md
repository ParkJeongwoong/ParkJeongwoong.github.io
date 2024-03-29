# mysqldump 명령문 에러 (착각으로 인한 에러)

## 문제상황

라즈베리파이 서버와 오라클 서버 동기화를 Spring Boot에서 컨트롤하고 싶었다. (그래야 관리가 편해질 것 같아서)

그리고 커맨드 실행문을 짜고 **Runtime.getRuntime.exec(command)** 를 이용해 돌렸는데 실행되지 않았다.

비밀번호가 입력되지 않았기 때문이다.



```
mysqldump -u [username] -p [database name] > [file name]
```

**Spring을 통해서 이 명령문을 실행햇을 때 명령문 실행 후 나오는 Password 입력 창에 비밀번호가 입력되지 않는 문제**



## 여러 삽질들

검색을 해 가며 코드를 계속 고치면서 다양하게 시도해봤다.

배열을 이용해 (String []) exec(commandArray)를 실행시켜도 보고 비밀번호를 입력하는 Process를 만들어서 연속으로 실행하거나 awaitFor()이 끝나고 실행시켜 보는 등의 시도를 했지만 실패했다.

```
mysqldump -u [username] -p [password] --add-drop-table --databases [database name] -r [file name]
```

명령어를 사용했다가

```
>> mysqldump -u [username] -p [database name] > [file name]
```

명령어로 바꿔도 봤고 방식을 바꿔

```java
BufferedReader input = new BufferedReader(new InputStreamReader(process.getInputStream()));
String line;
while ((line = input.readLine()) != null) {
    System.out.println(line);
}
input.close();
```

이렇게 BufferedReader를 이용해서 한 줄씩 읽어도 봤지만 여전히 비밀번호가 입력되지 않았다.



## 해결

눈썰미가 좋다면 문제점을 벌써 찾았을 거다.

난 여태 mysqldump 명령어로 한 번에 비밀번호를 입력할 수 있다는 걸 몰랐다.

```
mysqldump -u [username] -p[password] [database name] > [file name]
```

이렇게 **password를 -p 뒤에 붙여서 입력하면 따로 password 입력을 할 필요가 없는데**, 여태 그걸 모르고 있었다..

지금까지 띄어쓰기 오타라고 생각했는데 그게 아니었다.

사소하고 간단한 사실인데 이제야 깨달은 게 조금 어이없다.

무튼 password를 -p 뒤에 바로 붙여서 입력함으로써 문제를 해결했다.