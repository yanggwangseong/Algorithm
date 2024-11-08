from collections import deque

def solution(priorities, location):
    
    queue = deque([(i, p) for i, p in enumerate(priorities)])
    order = 0

    while queue:
        current = queue.popleft()

        # 현재 프로세스보다 높은 우선순위가 있는지 확인
        if any(current[1] < q[1] for q in queue):
            queue.append(current) # 우선순위가 높은 프로세스가 있다면 다시 큐에 넣음
        else:
            order += 1 # 현재 프로세스를 실행
            if current[0] == location:
                return order # location 찾는 프로세스라면 바로 리턴해준다