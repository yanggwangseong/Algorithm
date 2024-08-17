for _ in range(int(input())):
    N = int(input())
    food = sum(list(map(int, input().split())))
    day = 1
    while N >= food:
        day += 1
        food *=4
    print(day)