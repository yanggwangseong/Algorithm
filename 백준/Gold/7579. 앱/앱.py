INF = int(1e12)
MAX = 10001

# input
N, M = map(int, input().split())

mems = [0] + list(map(int, input().split()))
costs = [0] + list(map(int, input().split()))

# solve
dp = [[0] * (MAX) for _ in range(N + 1)]

for n in range(1, N + 1):
	for c in range(0, MAX):
		dp[n][c] = dp[n - 1][c]
		if c - costs[n] >= 0:
			dp[n][c] = max(dp[n][c], dp[n - 1][c - costs[n]] + mems[n])

ans = INF
for c in range(0, MAX):
	if dp[N][c] >= M:
		ans = min(ans, c)

print(ans)