
const factorial = (n) => {
    if (n == 1) return 1;
    if (n == 2) return 2;
    return n * factorial(n - 1)
}

console.log(factorial(5))

//  range of factorial

const rangeFact = (a, b) => {
    let res = []
    let current = 0;
    res[current] = factorial(a)
    for (let i = a + 1; i < b; i++) {
        res.push(i * res[current])
        current++
    }
    return res;
}

console.log(rangeFact(2, 6))