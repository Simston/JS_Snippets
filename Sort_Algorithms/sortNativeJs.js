function numberCompare(num1, num2) {
    return num1 - num2;
}
// Reverse value
function numberCompare2(num1, num2) {
    return num2 - num1;
}
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
let test = ["Stephane", "Simon", "Data structures", "Algorithms"].sort(compareByLen);
console.log(test)
