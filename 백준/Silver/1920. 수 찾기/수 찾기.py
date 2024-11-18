def solution(arr, target):
    min = 0
    max = len(arr) - 1

    while min <= max :
        mid = (min + max) // 2

        if arr[mid] < target:
            min = mid + 1

        if arr[mid] > target:
            max = mid -1

        if arr[mid] == target:
            return 1
        
    return 0

N, arr, M, arr2 = int(input()), list(map(int, input().split())), int(input()), list(map(int, input().split()))

sortArr = sorted(arr)
for item in arr2:
    print(solution(sortArr, item))