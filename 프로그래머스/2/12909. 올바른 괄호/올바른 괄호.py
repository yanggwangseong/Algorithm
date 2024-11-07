def solution(s):
    answer = True
    ary = []
    for i in range(len(s)):
        if s[i] == "(":
            ary.append(s[i])
        else:
            if ary: ary.pop()
            else: return False
    
    if ary: answer = False
    return answer