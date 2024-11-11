def solution(prices):
    n = len(prices)
    result = [0] * n
    stack = []

    for i in range(n):
        # 가격이 크면 주식이 떨어졌다.
        while stack and prices[stack[-1]] > prices[i]:
            index = stack.pop()
            result[index] = i - index # 가격이 떨어지지 않은 기간
        # 현재 인덱스를 스택에 추가
        stack.append(i)

    # 끝까지 가격이 안떨어진 케이스
    while stack:
        index = stack.pop()
        result[index] = n - 1 - index

    return result