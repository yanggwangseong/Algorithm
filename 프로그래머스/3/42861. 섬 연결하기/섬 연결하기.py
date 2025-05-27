
def solution(n, costs):
    
    answer = 0
    # n개의 섬 사이에 다리를 건설하는 비용 (costs)
    # 최소의 비용으로 모든 섬이 서로 통행 가능 하도록 만들때
    # 최소 비용
    # 0 -> 1, 1
    # 0 -> 1 , 0 -> 2
    parent = list(range(n))

    def find(x):
        # 재귀적으로 부모를 찾아가며 루트 노드를 찾고,
        # 찾는 도중 만난 모든 노드의 부모를 루트로 갱신한다.
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    # 두 노드를 하나의 집합으로 합치는 함수
    def union(a, b):
        rootA, rootB = find(a), find(b)
        # 서로 다른 집합이면 병합하고 True 반환
        if rootA != rootB:
            parent[rootB] = rootA
            return True
        # 이미 같은 집합이면 사이클 발생 → 추가하지 않음
        return False
    
    # 간선을 비용 기준으로 오름차순 정렬
    costs.sort(key=lambda x: x[2])
    total = 0 # MST 전체 비용 누적
    # 비용이 낮은 간선부터 하나씩 선택
    for a, b, cost in costs:
        # 두 노드가 서로 다른 집합이면 (사이클이 아니면)
        if union(a, b):
            total += cost # 해당 간선 비용을 더함
    
    return total
