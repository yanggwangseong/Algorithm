N = int(input())

def fibo(x):
    global arr

    if arr[x] != -1:
        return arr[x]
    
    arr[x] = fibo(x-1) + fibo(x-2)
    return arr[x]

arr = [-1] * (N+2)
arr[0] = 0
arr[1] = 1
print(fibo(N))