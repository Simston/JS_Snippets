// Iterative Solution
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

// Recursive Solution
function recursiveFactorial(num) {
    if (num === 0) return 1;
    let total = num * recursiveFactorial(num - 1);
    return total;
}
console.log(recursiveFactorial(7))