N = int(input())

def factory(N):

    if N == 0 or N == 1: # 0과 1일때는 1을 리턴
        return 1

    return N * factory(N -1) # 10 * 9 * 8 ...
    

result = factory(N)
print(result)
