def search(lev):
	global row, col, square, matrix, pos

	# base case
	if lev == len(pos): # 스도쿠 완성
		for i in range(9):
			for j in range(9):
				print(matrix[i][j], end=' ')
			print()
		exit(0)

	y, x = pos[lev]

	# recursive case
	for n in range(1, 10):
		if (n not in row[y]) and (n not in col[x]) and (n not in square[y // 3][x // 3]):
			row[y].add(n)
			col[x].add(n)
			square[y // 3][x // 3].add(n)
			matrix[y][x] = n

			search(lev + 1)

			matrix[y][x] = 0
			square[y // 3][x // 3].remove(n)
			col[x].remove(n)
			row[y].remove(n)


#initial settings
row = [set() for _ in range(9)]
col = [set() for _ in range(9)]
square = [[set() for _ in range(3)] for _ in range(3)]

# input
matrix = [list(map(int, input().split())) for _ in range(9)]

# solve
pos = []
for i in range(9):
	for j in range(9):
		cur = matrix[i][j]
		if cur == 0:
			pos.append((i, j))
		else:
			row[i].add(cur)
			col[j].add(cur)
			square[i // 3][j // 3].add(cur)

search(0)