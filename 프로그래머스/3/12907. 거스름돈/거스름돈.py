def solution(n, money):
    dp = [1] + [0] * n
    # money 동전 개수 종류(1,2,5..)
    # n 거슬러 줘야하는 금액
    # 5로 나머지값 , 2로 나눌 수 있는 1, 2,... 나머지
    # 1로 나눌 수 있는 1, 2,3,... 나머지
    for mo in money:
        for price in range(mo, n + 1):
            if price >= mo:
                dp[price] += dp[price - mo]
                
    return dp[n] % 1000000007
