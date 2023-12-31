// Multiple Pointers - countUniqueValues

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//     countUniqueValues([1,1,1,1,1,2]) // 2
//     countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
//     countUniqueValues([]) // 0
//     countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)

// MY SOLUTION

function countUniqueValues(arr) {
    let counterUnique = 1;
    let uniqueValue = arr[0];
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (uniqueValue !== arr[i]) {
            counterUnique++;
            uniqueValue = arr[i];
        }
    }
    return counterUnique;

}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// ANOTHER SOLUTION WITH 2 POINTERS
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));