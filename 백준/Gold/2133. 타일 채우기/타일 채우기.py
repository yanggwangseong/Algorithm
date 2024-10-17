def func(n): #return dp[n]
	global dp

	# base case
	if n % 2 == 1: # 홀수
		return 0
	if dp[n] != -1:
		return dp[n]

	# recursive case
	dp[n] = func(n - 2) * 3
	for i in range(n - 4, -1, -2):
		dp[n] += func(i) * 2

	return dp[n]


# input
N = int(input())

# solve
dp = [-1] * (N + 1)
dp[0] = 1

print(func(N))
