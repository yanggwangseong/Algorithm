def func1(n): # dp1[n]을 반환
	global N, arr, dp1

	# base case
	if dp1[n] != -1:
		return dp1[n]

	# recursive case
	dp1[n] = 1
	for i in range(1, n):
		if arr[n] > arr[i]:
			dp1[n] = max(dp1[n], func1(i) + 1)

	return dp1[n]

def func2(n): # dp2[n]을 반환
	global N, arr, dp2

	# base case
	if dp2[n] != -1:
		return dp2[n]

	# recursive case
	dp2[n] = 1
	for i in range(N, n, -1):
		if arr[n] > arr[i]:
			dp2[n] = max(dp2[n], func2(i) + 1)

	return dp2[n]


# input
N = int(input())
arr = [0] + list(map(int, input().split()))

# solve
dp1 = [-1] * (N + 1)
dp2 = [-1] * (N + 1)
dp1[1] = dp2[N] = 1

ans = 0
for n in range(1, N + 1):
	ans = max(ans, func1(n) + func2(n) - 1)

print(ans)
