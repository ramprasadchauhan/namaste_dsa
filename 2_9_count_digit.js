// write a function that return the count of digits in a number

function countDigit(n) {
    return (n.toString()).length
}

console.log(countDigit(567))

// by while loop
function countDigit1(n) {
    if (n == 0) return 1
    if (n < 0) n = Math.abs(n)
    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count
}

console.log(countDigit1(-123))
