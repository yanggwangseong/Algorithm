N = int(input())

num = 1000 - N
coin1 = num // 500
num %= 500
coin2 = num // 100
num %= 100
coin3 = num // 50
num %= 50
coin4 = num // 10
num %= 10
coin5 = num // 5
num %= 5
coin6 = num // 1
num %= 1

print(coin1 + coin2 + coin3 + coin4 + coin5 + coin6)