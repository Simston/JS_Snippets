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

    console.log(mergeArray);
    return mergeArray
}

mergeArrays([2, 4, 10], [8, 9, 11])