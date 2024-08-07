N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]
result = sorted(arr, key=lambda x:(x[0], x[1]))

for row in result:
    print(' '.join(map(str, row)))