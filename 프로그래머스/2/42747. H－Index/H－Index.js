function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    
    const hIndex = arr.reduce((acc, data, index) => {
        if (data >= index + 1) {
            return index + 1;
        } else {
            return acc;
        }
    }, 0);
    
    return hIndex;
}