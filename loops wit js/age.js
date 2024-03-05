function classifyPerson(age) {
    if (age < 13) {
        return "kid";
    } else if (age >= 13 && age <= 19) {
        return "teen";
    } else {
        return "adult";
    }
}

// Test the function
console.log(classifyPerson(8));   // Output: "kid"
console.log(classifyPerson(16));  // Output: "teen"
console.log(classifyPerson(25));  // Output: "adult"