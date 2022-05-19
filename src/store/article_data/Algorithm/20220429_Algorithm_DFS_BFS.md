# DFS & BFS 유형

> 대표적인 그래프 문제

[문제를 해결 순서]

1. visited 리스트 생성

2. 연결 상태 리스트 생성

3. 시작 노드를 리스트에 담기

4. 노드를 꺼내고 연결 노드를 담기

- 이 때 노드를 어떻게 꺼내냐에 따라 DFS/BFS가 나뉨
  1. DFS : Stack 사용
  1. BFS : Queue 사용



## DFS

> Stack으로 꺼내기

```python
##### 입력 : 정점의 수(N) 간선의 수(M) 탐색의 시작 점점(V)
import sys

N, M, V = map(int,sys.stdin.readline().split())

##### (N x N) array 만들기
Nodes = []
for i in range(N):
    Nodes.append([0]*N) # 이게 N = [Nodes]*N 이렇게 짜면 참조변수가 된다.

visited = [0] * N # 방문한 곳

# Edge 연결
for i in range(M):
    a, b = map(int,sys.stdin.readline().split())
    Nodes[a-1][b-1] = 1
    Nodes[b-1][a-1] = 1



##### DFS
def DFS(Nodes,V,visited,bills):
    visited[V] = 1
    bills.append(V)
    for i, edge in enumerate(Nodes[V]):
        if edge and visited[i] == 0:
            DFS(Nodes,i,visited,bills)
            
    return bills

# DFS 출력
bills = []
DFS_result = DFS(Nodes,V-1,visited,bills)
for i in DFS_result:
    print(i+1, end = ' ')
print()
```



## BFS

> Queue로 꺼내기

```python
##### 입력 : 정점의 수(N) 간선의 수(M) 탐색의 시작 점점(V)
import sys

N, M, V = map(int,sys.stdin.readline().split())

##### (N x N) array 만들기
Nodes = []
for i in range(N):
    Nodes.append([0]*N) # 이게 N = [Nodes]*N 이렇게 짜면 참조변수가 된다.

visited = [0] * N # 방문한 곳

# Edge 연결
for i in range(M):
    a, b = map(int,sys.stdin.readline().split())
    Nodes[a-1][b-1] = 1
    Nodes[b-1][a-1] = 1



##### BFS
def BFS(Nodes,V,visited,bills,queue=[]):
    bills.append(V)
    visited[V] = 1
    
    for i, edge in enumerate(Nodes[V]):
        if edge and visited[i] == 0 :
            queue.append(i)
            
	# queue를 재귀처럼 사용
    while queue:
        go = queue.pop(0)
        if visited[go] == 0:
            bills.append(go)
        visited[go] = 1
        for i, edge in enumerate(Nodes[go]):
            if edge and visited[i] == 0 :
                queue.append(i)
                
    return bills

# BFS 출력
bills = []
visited = [0] * N

BFS_result = BFS(Nodes,V-1,visited,bills)
for i in BFS_result:
    print(i+1,end = ' ')
```



