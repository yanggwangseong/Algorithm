input()

def useCoin(N):
    current_num = N
    use25 = current_num // 25
    current_num %= 25
    use10 = current_num // 10
    current_num %= 10
    use5 = current_num // 5
    current_num %= 5
    use1 = current_num // 1
    current_num %= 1
    print(use25 ,use10, use5, use1)

while True:
    try:
        N = int(input())
        useCoin(N)
    except:
        break