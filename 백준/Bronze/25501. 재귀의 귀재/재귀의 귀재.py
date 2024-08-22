N = int(input())

arr = [input() for _ in range(N)]

def isPalindrome(str, l, r):
    if l >= r : return 1, l+1
    elif str[l] != str[r] : return 0, l+1
    
    return isPalindrome(str, l+1, r-1)

for char in arr:
    print(' '.join(map(str, isPalindrome(char, 0, len(char)-1))))

