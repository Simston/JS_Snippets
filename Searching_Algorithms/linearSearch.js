// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, 
// and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

function linearSearch(array, searchValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1, 3, 4, 5, 6, 88, 9, "withText", 544, 566, 255, 365], "withText"));