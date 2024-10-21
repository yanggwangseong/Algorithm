import sys
input = lambda: sys.stdin.readline().rstrip()

def is_possible(k): # return True if k이상이 가능하면
	global N, C, arr

	bef_idx = 0
	cnt = 1
	for idx in range(1, N):
		if arr[idx] - arr[bef_idx] >= k:
			bef_idx = idx
			cnt += 1
		
	return (cnt >= C)


# input
N, C = map(int, input().split())
arr = sorted([int(input()) for _ in range(N)])

# solve (parametric search)
cur = -1
step = int(1e9) + 1

while step != 0:
	while cur + step <= int(1e9) and is_possible(cur + step):
		cur += step
	step //= 2

print(cur)
