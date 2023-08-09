function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let idxMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idxMin]) {
                idxMin = j;
            }
        }
        swap(arr, idxMin, i);
    }
    return arr;
}
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}
console.log(selectionSort([2, 1, 3, 1]));