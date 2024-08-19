import sys


sys.setrecursionlimit(1000)
def power_mod(A, B, C):
    # Base Case
    if B == 1:
        return A % C
    
    # Recursive Case
    half = power_mod(A, B // 2, C)
    
    # 홀수인지 짝수인지에 따라 다른 계산
    if B % 2 == 0:
        return (half * half) % C
    else:
        return (half * half * A) % C

A, B, C = map(int, input().split())
result = power_mod(A, B, C)
print(result)