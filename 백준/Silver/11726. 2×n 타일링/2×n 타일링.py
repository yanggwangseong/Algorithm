# input
N = int(input())

# solve
dp = [0] * (N + 2)
dp[1] = 1
dp[2] = 2

for n in range(3, N + 1):
	dp[n] = (dp[n-1] + dp[n-2]) % 10007

print(dp[N])