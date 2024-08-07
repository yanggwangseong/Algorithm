N = int(input())

arr = [list(map(int, input().split())) for _ in range(N)]
result = sorted(arr, key=lambda x:(x[1]*x[2]*x[3], x[1]+x[2]+x[3], x[0]))

print(' '.join([str(row[0]) for row in result[:3]]))