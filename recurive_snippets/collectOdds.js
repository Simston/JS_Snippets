// Recurisve with Helper method
function collectOddsValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1));
    }
    helper(arr);

    return result;

}
console.log(collectOddsValues([11, 2, 3, 4, 52, 6, 7, 8, 9]));

// Now same thing with Pure recursion
function collectOddsValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddsValues(arr.slice(1)));
    return newArr;
}
console.log(collectOddsValues2([11, 2, 3, 4, 52, 6, 7, 8, 9]));
