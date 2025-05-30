def solution(routes):
    answer = 0
    # -20 i번째 차량이 고속도로에 진입한 지점
    # -15 i번째 차량이 고속도로에서 나간 지점
    # 모든 차량이 한번이상 단속 카메라에 찍히게 하기 위한
    # 최소 카메라 수
    # -20(0) -18(2) -14(1) -13(out 2) -15(0) -5(1)
    # 아웃풋 지점 오름차순
    sort_routes = sorted(routes, key=lambda x:x[1])
    cnt = 0
    limit = -30001
    
    for route in sort_routes:
        # 인풋 지점이 차량의 진입 지점기준값보다 크다면
        if route[0] > limit:
            # 카메라 1대 더 필요
            cnt +=1
            # 진입 지점 기준값을 해당 차량 아웃풋 값으로 갱신
            limit = route[1]
            
    return cnt
