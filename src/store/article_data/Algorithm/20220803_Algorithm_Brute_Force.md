# 완전 탐색 유형 (브루트 포스) + 순열/조합

> 모든 경우의 수를 탐색

가장 단순하고 기초적인 방법임과 동시에 생각보다 자주 문제 해결에 도움이 되는 알고리즘이다.

시간 초과에 대한 리스크가 있지만 생각보다 자주 브루트 포스만으로 문제가 풀리고 빠르게 구현해서 테스트할 수 있다는 장점 때문에 해법에 접근하는 과정에서 첫 시도로 좋은 방법이다.

(시간 초과가 나면 그 때 접근 방법을 바꾸면 된다. 확실하지 않은 상태에서 더 복잡한 방법으로 시도했다가 보다 간단한 브루트 포스로 바꿔 접근하기는 심적으로 쉽지 않다)



다만 알고리즘 특성상 문제 조건과 탐색하는 범위를 보고 위험하다 싶으면 높은 확률로 시간초과가 나기 때문에 조건을 잘 보고 다른 방식을 찾는 게 좋을 때도 있다.



브루트 포스 문제는 자료 구조에 따라 2가지로 나뉜다.

1. 선형 구조 -> 순차탐색

2. 비선형 구조 -> 그래프 (DFS, BFS)



## 선형 구조

선형 구조는 아래와 같이 반복문을 사용해 값을 하나씩 확인하며 선형적으로 탐색하는 방법이다.

```python
# https://www.acmicpc.net/problem/1182

N, S = map(int, input().split())
numbers = list(map(int, input().split()))
answer = 0

# 비트 마스킹을 이용해 숫자 선택의 유무를 표현
# 3개의 숫자를 선택하는 경우의 수 : 001, 010, 011, 100, 101, 110, 111
standard = 2**(N) -1
for i in range(1,standard+1): # 경우의 수 대입
    tmp_sum = 0
    number_i = 1 # number를 선택하는 인덱스

    while i:
        j = i % 2 # 이진법의 오른쪽 0/1부터 확인
        if j:
            tmp_sum += numbers[N-number_i]
        number_i += 1
        i //= 2
    if tmp_sum == S:
        answer += 1

print(answer)
```

선형 구조는 순열/조합과 섞여서 나오는 경우도 많다.

개인적으로 재귀 함수 대신 복잡하더라도 while문으로 구현하는 것을 선호한다.

```python
# 순열
def permutation(arr): # 사전순으로 순열을 찾는 Next Permutation 방법 (첫 arr가 사전순이어야 한다)
        N = len(arr)
        result = [arr[:]]

        while True:
            # 1) i값이 i-1값보다 작으면 stop 
            i = N-1
            while i>0 and arr[i-1] > arr[i]:
                i -= 1

            if i == 0: # 4) 내림차순 정렬 완료
                break

            # 2) j값이 i-1값보다 더 크면 stop
            j = N-1
            while arr[j] < arr[i-1]:
                j -= 1
            arr[j], arr[i-1]= arr[i-1], arr[j]

            # 3) i이후 부분은 오름차순 (현재 내림차순이기 때문에 순서를 역순으로 바꿔줌)
            k = N-1
            while i < k:
                arr[i], arr[k] = arr[k], arr[i]
                i += 1
                k -= 1

            result.append(arr[:])

        return result


# 조합
def combination(arr):
    result = []

    bitmasking = 2**(len(arr))-1
    for bit_num in range(1,bitmasking+1):
        index = 1
        tmp_arr = []

        while bit_num:
            if bit_num % 2:
                tmp_arr.append(numbers[len(arr)-imdex])

            index += 1
            bit_num //= 2

    return result
```



## 비선형 구조

비선형 구조는 백트래킹 같은 기법 없이 DFS와 BFS를 끝까지 진행하는 방식을 말한다.

```python
# https://www.acmicpc.net/problem/2644

def dfs(i,j, level):
    if isSunken(i,j,level) or visited[i][j]:
        return False

    stack = [(i,j)]

    while stack:
        y, x = stack.pop()

        if visited[y][x]:
            continue
        visited[y][x] = True
        if isSunken(y,x,level):
            continue

        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]
            if 0<=ny and ny<N and 0<=nx and nx<N and not visited[ny][nx]:
                stack.append((ny,nx))

    return True

def isSunken(i,j,level):
    if area[i][j] < level:
        return True

# Run
dy = [0,-1,0,1]
dx = [1,0,-1,0]
N = int(input())
area = []
minHeight = 100
maxHeight = 1
answer = 0

for _ in range(N):
    tempArea = list(map(int, input().split()))
    minHeight = min(minHeight, min(tempArea))
    maxHeight = max(maxHeight, max(tempArea))
    area.append(tempArea)

for level in range(minHeight-1, maxHeight+1):
    visited = [[False]*N for _ in range(N)]
    tempAnswer = 0
    for i in range(N):
        for j in range(N):
            tempAnswer += dfs(i,j, level)
    answer = max(answer, tempAnswer)

print(answer)
```

(그래프 유형은 다음에 작성할 그래프 유형 글에서 더 깊게 다룰 예정)
