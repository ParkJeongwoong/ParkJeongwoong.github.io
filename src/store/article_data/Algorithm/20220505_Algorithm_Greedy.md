# 그리디 유형

> 매 순간 최선의 값을 구하는 방식

직관적으로 문제를 해결해야 함 (최적 부분 구조; 부분 문제의 최적 값이 전체 문제의 최적 값과 일치하는 경우 사용 가능)

공식이 없는 경우가 많음 (문제 유형이 다양함)

여기선 그리디 유형 중 알아두면 문제 해결에 도움이 될만한 것을 소개



참고로 그래프/트리 유형의 문제가 그리디로 많이 소개됨 (하지만 이런 유형은 그래프/트리에서 다룰 예정)

ex)

- `Prim` : **최소 신장 트리 탐색** - 서브 트리를 확장하면서 탐색
- `Kruskal` : **최소 신장 트리 탐색** - Cycle이 없는 서브 그래프를 확장하면서 탐색
- `Dijkstra` : **최단 경로 탐색** - 가장 가까운 인접 정점을 찾는 방식
- `Huffman tree & code` : **압축** - 빈도가 낮은 문자부터 이진 트리를 만들어 코드값 부여



## 활동 선택 문제 (Activity-Selection problem)

> ex) 회의실 문제

- <u>시작 시간</u>과 <u>종료 시간</u>이 있는 n개의 활동들의 집합에서, **겹치지 않는** 최대 갯수를 구하는 문제
  - 시작/종료 시간에만 값이 변하므로 이 시점을 기준으로 계산

```
1. 종료 시간 순으로 정렬

2. 종료 시간이 가장 빠른 활동을 선택

3. 이후 선택한 활동 이후에 종료 시간이 가장 빠른 활동을 선택을 반복
```



```python
# https://www.acmicpc.net/problem/1931

N = int(input())
meetings = sorted([list(map(int,input().split())) for _ in range(N)], key= lambda x:(x[1],x[0]))

ans = 0
end = 0

for s, e in meetings:
    if s >= end:
        ans += 1
        end = e

print(ans)
```



### 2018 KAKAO BLIND RECRUITMENT - 추석 트래픽

- <u>활동 선택 문제와는 반대</u>로 **겹치는** 최대 갯수를 구하는 문제

- 시작 시간과 종료 시간에만 값이 변한다는 것을 기준으로 연산 (여기선 1초 간의 트래픽이기 때문에 offset을 1초 둠)
- **종료 시간 기준** 비교

[방법1]

1. 시작 시간 & 종료 시간 비교

2. 겹치면 트래픽 +1 & 시작 시간 변경

3. 안 겹치면 트래픽 -1 & 종료 시간 변경

```python
curTraffic = 0
maxTraffic = 0
indexE = 0
indexS = 0
while((indexE < totalLines) & (indexS < totalLines)):
    if(S[indexS] < E[indexE]): # 겹침 => 시작 시간을 증가
        curTraffic += 1
        maxTraffic = max(maxTraffic, curTraffic)
        indexS += 1
    else: # 더 이상 겹치지 않음 => 종료 시간 변경
        curTraffic -= 1
        indexE += 1
```

[방법2]

1. 종료 시간을 기준으로 시작 시간 비교 => 변경
2. 최대값 찾아내기

```python
answer = 0
start_time_list, end_time_list = preprocess(lines)

for i in range(len(lines)):
    end_time = end_time_list[i]
    temp_answer = 0
    for j in range(i, len(lines)):
        temp_start_time = start_time_list[j]
        if end_time > temp_start_time:
            temp_answer += 1
    answer = max(answer,temp_answer)
```

