N = int(input())
age_words = [input().split() for _ in range(N)]

array = sorted(age_words,key=lambda x: (int(x[0])))

for age, name in array:
    print(age,name)