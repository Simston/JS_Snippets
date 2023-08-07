// With an array init
function fib(nthFibonacciWanted) {
    let arr = [1, 1];
    let startFib = 1;
    nthFibonacciWanted -= 2;

    function helper(arr, nthFibonacciWanted) {
        if (nthFibonacciWanted === 0) return 0;
        let index = arr.length - 2;
        startFib = startFib + arr[index];
        arr.push(startFib);
        return helper(arr, nthFibonacciWanted - 1);
    }

    helper(arr, nthFibonacciWanted);
    return arr[arr.length - 1];
}

console.log(fib(10));
// Best solution in recursive 
function fib2(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib2(10));

