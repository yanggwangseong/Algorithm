def tower(n, start, end):
    if n== 1:
        print(start, end)
        return
    
    tower(n-1, start, 6-start-end)
    print(start, end)
    tower(n-1, 6-start-end, end)

n = int(input())
print(2**n-1)
tower(n, 1, 3)