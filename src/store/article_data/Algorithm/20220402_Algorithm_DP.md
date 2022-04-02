# Dynamic Programming 유형

> 동적 계획법

[문제를 풀 때 생각할 것]

- 계산된 값을 `저장` -> 활용 (Memoization)
- Memoization을 위한 `배열`이 필요



## 유형1

- Check or Pass
  - **선택을 하는 경우 & 하지 않는 경우를 나누어서 생각**
  - Memoization용 배열에 최종 결과값을 위한 인덱스 필요

```python
# https://www.acmicpc.net/problem/14501

N = int(input())
Times = [0] * N
Payments = [0] * N
Expectations = [0] * (N+1)

for i in range(N):
    t, p = map(int, input().split())
    Times[i] = t
    Payments[i] = p

    for i in range(N-1, -1, -1):
        if i + Times[i] > N:
            Expectations[i] = Expectations[i+1]
        else:
            Expectations[i] = max(Expectations[i+1], Payments[i] + Expectations[i+Times[i]])

print(Expectations[0])
```

