str = input()

arr = [[(":fan:") for _ in range(3)] for _ in range(3)]
arr[1][1] = ":" + str + ":"

for a in arr:
    for b in a:
        print(b, end="")
    print()