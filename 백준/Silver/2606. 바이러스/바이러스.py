from collections import deque

N = int(input())
M = int(input())

adj_list = [[] for _ in range(N + 1)]
for _ in range(M):
	a, b = map(int, input().split())
	adj_list[a].append(b)
	adj_list[b].append(a)

visited = [False] * (N + 1)

q = deque()
q.append(1)
visited[1] = True

cnt = 0
while q:
	node = q.popleft()
	cnt += 1

	for adj_node in adj_list[node]:
		if visited[adj_node]:
			continue
		q.append(adj_node)
		visited[adj_node] = True

print(cnt - 1)