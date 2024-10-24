# input
N, S = map(int, input().split())
arr = list(map(int, input().split()))

# solve
ans = int(1e12)

cur_sum = 0
right = -1
for left in range(N):
	while (right + 1 < N) and (cur_sum + arr[right + 1] < S):
		right += 1
		cur_sum += arr[right]
		
	if cur_sum < S and right + 1 < N:
		right += 1
		cur_sum += arr[right]

	if right < N and cur_sum >= S:
		ans = min(ans, right - left + 1)

	cur_sum -= arr[left]

print(ans if ans != int(1e12) else 0)