// let a = 10

// console.log(a)

// a = 40
// console.log(a)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr)

// console.log(arr[5])



const allPrime = (a, b) => {
    let res = []
    if (a > b) return "Invalid input";
    for (let i = a; i <= b; i++) {
        let prime = checkPrime(i)
        if (prime) {
            res.push(i)
        }
    }
    return res;
}

console.log(allPrime(2, 15))

const checkPrime = (n) => {
    if (n === 2) return true; // 2 is prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // Found a divisor, so not prime
    }
    return true; // No divisors found, so n is prime
}


// function checkPrime(n) {
//     if (n === 2) return true;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//         return true
//     }
// }