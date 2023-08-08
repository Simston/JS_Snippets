function binarySearch(array, searchValue) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === searchValue) {
            return mid;
        } else if (array[mid] < searchValue) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 55, 66, 88, 99, 155, 222, 555, 666, 6554, 655654], 666));