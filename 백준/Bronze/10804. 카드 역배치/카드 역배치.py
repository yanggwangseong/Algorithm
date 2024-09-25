arr = [i for i in range(21)]

def reverse(i, j):
    arr[i:j+1] = arr[i:j+1][::-1]

while True:
    try:
        i, j = list(map(int, input().split(" ")))
        reverse(i, j)
    except:
        break

print(' '.join(map(str, arr[1::])))

