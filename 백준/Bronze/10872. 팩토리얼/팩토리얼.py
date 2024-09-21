N = int(input())

def factory(N):

    if N == 0 or N == 1: 
        return 1

    return N * factory(N -1) 
    

print(factory(N))
