function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let array1 = mergeSort(array.slice(0, mid));
    let array2 = mergeSort(array.slice(mid));

    return mergeArrays(array1, array2)
}

console.log(mergeSort([1, 2, 4, 4, 5, 6, 11, 8, 9, 10]));



function mergeArrays(arr1, arr2) {
    let mergeArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergeArray.push(arr1[i]);
            i++;
        } else {
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    // Add the remaining elements from arr1 to mergeArray.
    while (i < arr1.length) {
        mergeArray.push(arr1[i]);
        i++;
    }

    // Add the remaining elements from arr2 to mergeArray.
    while (j < arr2.length) {
        mergeArray.push(arr2[j]);
        j++;
    }
    return mergeArray
}

