import sys
def get_sum(sy, sx, ey, ex): # (sy, sx)부터 (ey, ex)까지의 2차원 합 반환
	global psum
	return psum[ey][ex] - (psum[ey][sx - 1] + psum[sy - 1][ex] - psum[sy - 1][sx - 1])

input = sys.stdin.readline

N, M = list(map(int, input().split()))

arr = [[0] * (N+1)] + [[0] + list(map(int, input().split())) for _ in range(N)]


psum = [[0 for _ in range(N + 1)] for _ in range(N + 1)]

# psum 갱신
for n in range(1, N + 1):
	for m in range(1, N + 1):
		psum[n][m] = (psum[n - 1][m] + psum[n][m - 1] - psum[n - 1][m - 1]) + arr[n][m]

# (3, 3)부터 (4, 5)까지의 2차원 합
for _ in range(M):
	x1, y1, x2, y2 = list(map(int, input().split()))
	print(get_sum(x1,y1,x2,y2))
