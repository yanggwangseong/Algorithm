import sys
input = lambda: sys.stdin.readline().rstrip()

def is_possible(k): 
	global N, M, arr

	cur_mn = arr[0]
	cur_mx = arr[0]
	cnt = 0

	for i in range(1, N):
		cur_mn = min(cur_mn, arr[i])
		cur_mx = max(cur_mx, arr[i])

		if cur_mx - cur_mn > k:
			cur_mn = arr[i]
			cur_mx = arr[i]
			cnt += 1
	cnt += 1

	return (cnt <= M)


N, M = map(int, input().split())
arr = list(map(int, input().split()))

ans = -1
for i in range(0, 10001):
	if is_possible(i):
		ans = i
		break

print(ans)