function reverseNumber(number) {
    // Convert number to a string
    let strNumber = number.toString();
    
    // Split the string into an array of characters, reverse it, and join it back into a string
    let reversedStr = strNumber.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    let reversedNumber = parseInt(reversedStr);
    
    return reversedNumber;
}

// Test the function
let inputNumber = 12345;
let reversedNumber = reverseNumber(inputNumber);
console.log(reversedNumber); // Output: 54321