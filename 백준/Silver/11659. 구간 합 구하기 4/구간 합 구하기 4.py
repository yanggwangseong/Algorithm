import sys

def get_sum(a, b): # a부터 b까지의 원소의 합 반환
    global psum
    return psum[b] - psum[a - 1]

input = sys.stdin.readline

N, M = list(map(int, input().split()))

arr = [0] + list(map(int, input().split()))
psum = [0] * (N + 1)  # 크기를 N+1로 변경

# psum 갱신
for n in range(1, N + 1):
    psum[n] = psum[n - 1] + arr[n]

while True:
    try:
        i, j = list(map(int, input().split()))
        print(get_sum(i, j))
    except:
        break
    