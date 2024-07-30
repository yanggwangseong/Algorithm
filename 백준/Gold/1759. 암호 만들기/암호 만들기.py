vows = ['a', 'e', 'i', 'o', 'u']
choose = []


def is_possible():
	global L, C, choose, arr

	vow = 0
	for c in choose:
		vow += (c in vows)
	con = L - vow

	return (vow >= 1 and con >= 2)

def combination(idx, lev):
	global L, C, choose, arr

	# base case
	if lev == L:
		if is_possible():
			print(''.join(choose))
		return

	# recursive case
	for i in range(idx, C):
		choose.append(arr[i])
		combination(i + 1, lev + 1)
		choose.pop()


L, C = map(int, input().split())
arr = input().split()

arr.sort()

combination(0, 0)