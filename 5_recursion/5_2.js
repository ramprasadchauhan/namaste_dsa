function sumArray(arr, index = 0) {
    // Base case: if index is equal to the length of the array, return 0
    if (index === arr.length) {
        return 0;
    }
    // Recursive case: sum the current element with the result of the next call
    return arr[index] + sumArray(arr, index + 1);
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
