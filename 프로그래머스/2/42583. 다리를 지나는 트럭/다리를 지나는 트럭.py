from collections import deque

def solution(bridge_length, weight, truck_weights):
    queue = deque(truck_weights)
    bridge = deque([0] * bridge_length)  # 다리 위 상태
    resultTime = 0
    addWeight = 0

    while queue or any(bridge):
        resultTime += 1
        # 다리에서 트럭을 내보냄
        out_truck = bridge.popleft()
        addWeight -= out_truck

        if queue:
            currentValue = queue[0]
            if addWeight + currentValue <= weight:
                # 트럭 다리 출발
                in_truck = queue.popleft()
                bridge.append(in_truck)
                addWeight += in_truck
            else:
                # 트럭을 올릴 수 없을때 빈공간을 다리에 추가
                bridge.append(0)
        
    return resultTime