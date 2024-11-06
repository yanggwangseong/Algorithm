from collections import deque

def solution(progresses, speeds):
    days = deque() # 각 작업의 남은 일수를 저장할 큐
    result = []

    # 각 작업이 완료되는 데 필요한 일수를 계산하여 days 큐에 추가
    for i in range(len(progresses)):
        remaining = (100 -progresses[i] + speeds[i] - 1) // speeds[i] # 올림 처리
        days.append(remaining)

     # 첫 번째 배포 기준일을 설정
    while days:
        current_day = days.popleft()  # 첫 번째 작업의 완료 일수 기준
        count = 1

        # 다음 작업들도 current_day 내에 완료되면 함께 배포
        while days and days[0] <= current_day:
            days.popleft()
            count += 1
        
        # 한 번의 배포에 포함된 작업 수를 결과에 추가
        result.append(count)

    return result