from itertools import combinations

N, K = list(map(int, input().split(" ")))

# for combo in combinations(iterable, r):
#     print(combo)

def binomial_coefficient(n, k):
    # n개의 요소를 가진 리스트 생성
    items = range(n)
    # N이 5일때 
    # [(0, 1), (0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)]
    # n개 중 k개를 선택하는 모든 조합을 생성하고 그 개수를 반환
    return len(list(combinations(items, k)))

print(binomial_coefficient(N, K))