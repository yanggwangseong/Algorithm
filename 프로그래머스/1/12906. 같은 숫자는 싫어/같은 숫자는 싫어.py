from collections import deque

def solution(arr):
    answer = []
    dq = deque()
    answer.append(arr[0])
    dq.append(arr[0])

    for item in arr:
        if item != dq.pop():
            answer.append(item)
        
        dq.append(item)
    
    return answer