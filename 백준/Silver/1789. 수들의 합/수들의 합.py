N = int(input())

# 최대한 많은 자연수를 사용해 S를 만들기 위해선 서로 다른 자연수들이 최소가 되어야한다

total = 0
count = 0

while True:
    count +=1 # 1씩 증가
    total += count
    if total > N:
        break

print(count -1)