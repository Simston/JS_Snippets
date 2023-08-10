// O(n²)
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        swap(arr, lowest, i);
    }
    return arr;
}
function swap(arr, lowestIdx, indexOfI) {
    let temp = arr[lowestIdx];
    arr[lowestIdx] = arr[indexOfI];
    arr[indexOfI] = temp;
    return arr;
}
console.log(selectionSort([2, 1, 3, 1, 5, 6, 54, 51]));