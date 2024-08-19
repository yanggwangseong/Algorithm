# Bottom-Up 방식
N = int(input())
arr = [0] + list(map(int, input().split()))
# 10 20 10 30 20 50

dp = [-1 for _ in range(N +1)] # -1로 초기화

# 초기값 처리 이게 진짜 중요함.
dp[1] = 1

# DP Table 갱싱
for n in range(2, N + 1): # dp[n]
    best = 0
    for i in range(1, n):
        if arr[n] > arr[i]:
            best = max(best, dp[i])
        dp[n] = best + 1

print(max(dp[1:]))