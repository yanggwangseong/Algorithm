def comb(idx, lev):
	global choose, arr, k

	# base case
	if lev == 6:
		for u in choose:
			print(u, end=' ')
		print()
		return

	# recursive case
	for i in range(idx, k):
		choose.append(arr[i])
		comb(i + 1, lev + 1)
		choose.pop()


while True:
	choose = []
	I = list(map(int, input().split()))

	k = I[0]
	arr = I[1:]
	if k == 0:
		break

	comb(0, 0)
	print()