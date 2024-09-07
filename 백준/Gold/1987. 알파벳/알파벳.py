def search(y, x):
	global dy, dx, R, C, board, st, ans

	# base case
	if y < 0 or x < 0 or y >= R or x >= C:
		return
	if board[y][x] in st:
		return
	st.add(board[y][x])

	ans = max(ans, len(st))

	# recursive case
	for i in range(4):
		ny = y + dy[i]
		nx = x + dx[i]
		search(ny, nx)

	st.remove(board[y][x])


dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

R, C = map(int, input().split())
board = [input() for _ in range(R)]

st = set()
ans = 0

search(0, 0)

print(ans)