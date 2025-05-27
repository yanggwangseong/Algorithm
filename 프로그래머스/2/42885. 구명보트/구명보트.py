def solution(people, limit):
    answer = 0
    # 최대한 적은 보트를 사용하는게 핵심
    # 보트에는 최대 2명만 탈 수 있고
    # limit를 넘을 수 없다.
    # 50,80x , 50,70x , 50,50
    # 70,80x
    # 70
    # 80
    left = 0
    right = len(people) - 1
    sort_people = sorted(people)
    while left <= right:
        if sort_people[left] + sort_people[right] <= limit:
            left +=1
            right -=1
            answer += 1
        else:
            right -=1
            answer +=1
        
    return answer
