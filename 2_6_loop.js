

function secondLargest(arr) {
    if (arr.length < 2) return null
    let first = -Infinity
    let second = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i];
        } else {
            // if need for first and asend not should be same , for duplicate then add & condition
            if (arr[i] > second && arr[i] != first) {
                second = arr[i]
            }
        }
    }
    return second
}

let arr = [1, 4, 3, 9, 6]

console.log(secondLargest(arr))