N = int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))

A = sorted(A)
# B = sorted(B, reverse=True)
# B = sorted(B, key=lambda x:-x)
B = sorted(B)[::-1] # split으로 내림차순 하는 방법

ans = 0
for i in range(N):
    ans += A[i] * B[i]

print(ans)