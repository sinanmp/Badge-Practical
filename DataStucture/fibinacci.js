function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Displaying the Fibonacci series up to a given number of terms
function displayFibonacciSeries(numTerms) {
    for (let i = 0; i < numTerms; i++) {
        console.log(fibonacci(i));
    }
}

// Example: Displaying the first 10 terms of the Fibonacci series
displayFibonacciSeries(10);



