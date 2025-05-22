N = int(input())
arr = [list(map(str, input().split())) for _ in range(N)]
result = []
for cnt, str1 in arr:
	tmp_str = ""
	for str2 in str1:
		tmp_str+= str2 * int(cnt)
	print(tmp_str)
