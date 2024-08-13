from itertools import product

a, b = map(int, input().split())
a_len = len(str(a))
b_len = len(str(b))
count = 0
for i in range(a_len, b_len + 1):
    for n in product([4,7], repeat=i):
        tmp = ''.join(list(map(str, n)))
        if a <= int(tmp) <= b :
            count += 1

print(count)