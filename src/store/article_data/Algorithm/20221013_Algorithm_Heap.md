# 힙 유형 (우선순위 큐)

> 우선순위 큐

Heap은 "**최대/최소값**"을 "**효율적**"으로 구해야 할 때 유용하다.

다만 처음 문제를 마주하고 바로 힙을 사용하는 건 쉽지 않다. 이는 브루트포스를 먼저 시도해보는 이유와 비슷하다. 확실하지 않다면 단순하게 접근하는 것으로 시작하는 것이 효율적이기 때문이다. 괜히 복잡한 방식으로 먼저 접근하면 중간에 풀이가 꼬여 너무 많은 시간이 소요될 수 있다.

그나마 다행인 유형은 <u>1)직관적으로 접근하는 과정에 우선순위큐를 사용하게 되는 경우</u> 이다.



## 우선순위 큐 유형 1

```python
# https://www.acmicpc.net/problem/1520

import sys
import heapq
input = sys.stdin.readline

def main():
  dx, dy = [-1, 0, 1, 0], [0, 1, 0, -1]

  def bfs(x, y):
    heap = [(-board[x][y], x, y)]
    dp = [[0] * M for _ in range(N)]
    dp[x][y] = 1

    while heap:
      cnt, cx, cy = heapq.heappop(heap)

      for i in range(4):
        nx, ny = cx + dx[i], cy + dy[i]

        if not 0 <= nx < N or not 0 <= ny < M:
          continue
        if board[nx][ny] >= board[cx][cy]:
          continue

        if dp[nx][ny] == 0:
          heapq.heappush(heap, (-board[nx][ny], nx, ny))
        dp[nx][ny] += dp[cx][cy]

    return dp


  N, M = map(int, input().split())
  board = [list(map(int, input().split())) for _ in range(N)]

  print(bfs(0, 0)[N - 1][M - 1])

if __name__ == "__main__":
  I = sys.stdin.readline
  main()
```

이 문제는 BFS를 이용해 문제를 풀다가 단순 Queue가 아니라 최대 Heap이 필요해서 Heap을 사용한 경우다.

- Heap이 아니라 Queue를 사용하면 이미 방문한 경로를 다시 방문하는 경우가 생길 수 있음
  - 낮은 곳을 먼저 방문했다 다음에 높은 곳을 방문한 뒤 다시 같은 장소를 방문하면 이전 경로의 dp값을 현재 경로에 더하는 과정을 중복으로 더하는 상황이 생기게 된다.

항상 직관적인 풀이과정 중 우선순위 큐를 자연스레 접목시킬 수 있는 건 아니다.

<u>2)Heap을 사용하기 위해 접근 방법을 완전히 달리 해야 하는 경우</u> 도 있다.



## 우선순위 큐 유형 2

```python
# https://school.programmers.co.kr/learn/courses/30/lessons/42891

import heapq

def solution(food_times, k):
  heap = [(food_times[i],i) for i in range(len(food_times))]
  heapq.heapify(heap)
  popped = []
  eaten = 0

  while heap:
    if k >= (heap[0][0]-eaten) * len(heap):
      k -= (heap[0][0]-eaten) * len(heap)
      eaten, popped_food = heapq.heappop(heap)
      heapq.heappush(popped, popped_food)
    else:
      answer = k%len(heap)
      while popped:
        if answer >= heapq.heappop(popped):
          answer = answer+1
      return answer+1
  return -1
```

프로그래머스에 있는 2019년 카카오 블라인드 채용의 '무지의 먹방 라이브' 문제다.

이 문제는 직관적으로 접근하면 다음과 같은 반복문이 나온다.

```python
def solution(food_times, k):
  next_food = [i+1 for i in range(len(food_times))]
  from_food = [i-1 for i in range(len(food_times))]
  next_food[-1] = 0
  from_food[0] = len(food_times)-1

  i = 0
  while k:
    food_times[i] -= 1
    if not food_times[i]:
      next_food[from_food[i]] = next_food[i]
      from_food[next_food[i]] = from_food[i]
    i = next_food[i]
    k -= 1
    if not food_times[i]:
      return -1

  answer = i+1
  return answer
```

반복문으로 시뮬레이션을 하면서 문제를 푸는 이 방식으로는 절대 효율성 테스트를 통과할 수 없다. k가 매우 크기 때문에 k값을 전부 계선하는 건 불가능하다.

이를 뒤집기 위해서는 Heap을 이용해서 "계산"을 해야 한다.

그리고 이를 시도하기 위해선 계산으로 값을 구하는 게 가능한지 생각해봐야 하고 이 과정이 가장 어렵다.

`사실 정확히 말하자면 Heap을 쓰기 위해 접근 방법을 고친다는 말은 잘못되었다. 접근 방법을 바꾸는 과정에서 Heap을 사용하게 된 것이 맞다.`

**즉 Heap을 문제 풀이에 사용하는 건, 처음부터 염두에 둔다기 보단 문제 풀이 과정에서 최대, 최소 값이 필요할 때 자연스럽게 찾아 쓰는 것이다.**

이 문제를 푸는 사고 과정은

1. 시뮬레이션으로 시도
2. 효율성 테스트 실패
3. 효율성을 높이기 위한 방법 탐색
4. 시간 - 남은 음식 - 순서 간의 관계를 계산을 통해 풀 수 있음을 인지
5. **식을 세우는 과정에 남은 음식의 최솟값을 찾아야 하기 때문에 Heap 사용**

이 된다.

그리고 이런 문제는 웬만하면 나중에 푸는 것이 좋다.



## 이중 우선순위 큐

이중 우선순위 큐는 최소힙 & 최대힙을 합친 개념이다.

그리고 이를 간단히 구현하는 방법은 힙을 2개 준비해서 최소값이 필요할 땐 최소힙에서, 최대값이 필요할 땐 최대힙에서 찾으면 된다.