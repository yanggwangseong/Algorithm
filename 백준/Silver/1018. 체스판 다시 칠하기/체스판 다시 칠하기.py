def get_min(sy, sx):
    global board, chess1, chess2
    case1 = case2 = 0

    for i in range(8):
        for j in range(8):
            case1 += (board[sy + i][sx + j] != chess1[i][j])
            case2 += (board[sy + i][sx + j] != chess2[i][j])

    return min(case1, case2)


# initial setting
chess1 = [['' for _ in range(8)] for _ in range(8)]
chess2 = [['' for _ in range(8)] for _ in range(8)]

for i in range(8):
    for j in range(8):
        chess1[i][j] = ('W' if (i + j) % 2 == 0 else 'B')
        chess2[i][j] = ('B' if (i + j) % 2 == 0 else 'W')

# input
N, M = map(int, input().split())
board = [input() for _ in range(N)]

# solve
best = int(1e12)
for y in range(N):
    for x in range(M):
        if (y + 7 >= N) or (x + 7 >= M):
            continue
        best = min(best, get_min(y, x))

print(best)
