function fibonacciSeries(n) {
    let fibonacci = [0, 1]; // Initialize Fibonacci series with the first two terms
    
    // Loop to generate Fibonacci series up to the Nth term
    for (let i = 2; i < n; i++) {
        let nextFib = fibonacci[i - 1] + fibonacci[i - 2]; // Calculate the next Fibonacci term
        fibonacci.push(nextFib); // Add the next Fibonacci term to the series
    }
    
    return fibonacci.join(' '); // Join the Fibonacci series elements into a string with space as separator
}

// Test the function
let N = 10;
console.log(fibonacciSeries(N)); // Output: 0 1 1 2 3 5 8 13 21 34