
import math


lst = []

while True:
    try:
        N = int(input())
        lst.append(N)
    except:
        break

middle = math.floor(len(lst) /2)
arr = sorted(lst)
avg = math.floor(sum(lst) / len(lst))
print(avg)
print(arr[middle])
