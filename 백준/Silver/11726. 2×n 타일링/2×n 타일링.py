### bottom-up 방식
N = int(input())

# dp 테이블 설계 
# dp[n] = dp[n-1] + dp[n-2]

dp = [-1] * (N + 2)
dp[1] = 1
dp[2] = 2

for i in range(3, N+1):
    dp[i] = (dp[i-1] + dp[i-2]) % 10007

print(dp[N])