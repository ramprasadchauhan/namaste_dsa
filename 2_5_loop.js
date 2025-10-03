// 1write a function that searches for an element in an array and returns the index, if the element is not present then return -1

let arr = [3, 5, 6, 8, 9, 0]

function searchElement(arr, tar) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) return i;
    }
    return -1
}

function searchElement1(arr, tar) {
    for (let i in arr) {
        if (arr[i] === tar) return i
    }
    return -1
}

console.log(searchElement(arr, 5))
console.log(searchElement1(arr, 9))



//2 write a functions that return the numbers of negative numbers in array

function negativeCount(arr) {
    let count = 0
    for (let i of arr) {
        if (i < 0) {
            count++
        }
    }
    return count
}

let arr2 = [1, -4, -6, 5, -7]
console.log(negativeCount(arr2))


// 3). write a function that return largest number in the array

function findLargest(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findLargest(arr2))