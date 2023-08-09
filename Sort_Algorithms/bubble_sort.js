function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, (j + 1));
            }
            console.log(arr)
        }
    }
    return arr;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

// ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

console.log(bubbleSort([11, 4, 6, 8, 2, 10]))