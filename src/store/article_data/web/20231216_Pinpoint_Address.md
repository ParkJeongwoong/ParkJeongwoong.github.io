# Pinpoint - Client IP(REMOTE_ADDRESS) 172.17.0.1

## 참고 - 현재 구조

````
[Sever1 (Spring Application(Docker), Pinpoint Agent)] -> [Server2 (Hbase, Pinpoint Web)]
````



## 문제 확인

pinpoint web에서 Client IP가  **172.17.0.1** 로 나오는 게 확인됐다.

172.17.0.1은 Docker 에서 사용하는 가상 IP인데 중간에 뭔가 잘못 전달하고 있는 걸로 보인다.



Client -> Nginx -> Docker(Spring Application) -> Pinpoint Agent -> Hbase -> Pinpoint Web

으로 이어지는 과정 중 어딘가가 원인이었는데, `결론적으로는 Nginx와 Pinpoint Agent` 를 수정해 문제를 해결했다.



## 해결 방법

1. 우선 **Pinpoint Agent의 config에 profiler.tomcat.realipheader=X-Forwarded-For을 추가** 함으로써 .agent가 container의 IP가 아니라 X-Forwarded-For을 바라보도록 만들었다.

2. Nginx의 Config를 열어 location에 아래의 설정을 추가했다.

   ```
   proxy_set_header X-Forwarded-Host   $host;
   proxy_set_header X-Real-IP          $remote_addr;
   proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
   ```



## 참고

[삐에로z - Real Remote Address (reverse proxy 사용)](https://ploz.tistory.com/entry/18-Real-Remote-Address-reverse-proxy-%EC%82%AC%EC%9A%A9)