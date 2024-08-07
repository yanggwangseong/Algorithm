from itertools import permutations


N = int(input())
array = [input().split() for _ in range(N)]
result = 0

for dep in permutations(range(1, 10), 3):
    success = True
    for num, st, bl in array:
        dep_st = dep_bl = 0

        for i in range(3):
            if str(dep[i]) == num[i]:
                dep_st +=1
            elif str(dep[i]) in num:
                dep_bl +=1

        if dep_st != int(st) or dep_bl != int(bl):
            success = False
            break

    if success:
        result +=1

print(result)