function printPattern(rows) {
    // Outer loop for rows
    for (let i = 0; i < rows; i++) {
        let output = '';
        // Inner loop for printing '+' characters
        for (let j = 0; j < rows - i; j++) {
            output += '+';
        }
        // Inner loop for printing '-' characters
        for (let k = 0; k < i; k++) {
            output += '-';
        }
        console.log(output);
    }
}

// Call the function with the number of rows as input
printPattern(5);