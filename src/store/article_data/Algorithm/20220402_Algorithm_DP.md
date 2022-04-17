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



## 유형2 - 배낭 문제

- 무게 & 가치
  - 한계 무게 안에서 최대 가치를 얻기

### 방법1 : 이차원 배열 이용

- 무게 & 물건을 좌표로 하는 이차원 배열을 사용
  - 각 물건 & 무게에 대해 최대 가치를 저장

|       | null | 물건1 | 물건2 | 물건3 | ...  | 물건N |
| ----- | ---- | ----- | ----- | ----- | ---- | ----- |
| null  | 0    | 0     | 0     | 0     | 0    | 0     |
| 무게1 | 0    |       |       |       |      |       |
| 무게2 | 0    |       |       |       |      |       |
| 무게3 | 0    |       |       |       |      |       |
| ...   | 0    |       |       |       |      |       |
| 무게K | 0    |       |       |       |      |       |

```python
# https://www.acmicpc.net/problem/12865

N, K = map(int, input().split())
objs = [[0,0]] + [list(map(int, input().split())) for _ in range(N)]
dp = [[0]*(K+1) for _ in range(N+1)]

for i in range(1, N+1):
    for j in range(1, K+1):
        if (j < objs[i][0]):
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j-objs[i][0]]+objs[i][1], dp[i-1][j])

print(dp[-1][-1])
```

### 방법2 : 일차원 배열 이용

- **무게를 중심**으로 메모이제이션 사용

- 이 경우 무게를 작은 것부터 계산할 경우(j를 증가시키면서 연산), 작은 무게에서 변경된 값이 높은 무게에서 다시 변경되어 중복 계산이 될 수 있다.
- 따라서 큰 무게부터 작은 무게로 내려가면서 계산해야 한다.

```python
# https://www.acmicpc.net/problem/12865

N, K = map(int, input().split())
objs = [[0,0]] + [list(map(int, input().split())) for _ in range(N)]
dp = [0]*(K+1)

for i in range(1, N+1):
    for j in range(1, K+1):
        dp[j] = max(dp[j-objs[i][0]]+objs[i][1], dp[j])

print(dp[-1])
```

