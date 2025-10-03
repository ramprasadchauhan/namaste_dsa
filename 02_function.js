function printHelloWorld(name) {
    console.log("Hello " + name);
}
printHelloWorld("Akshay");

function greet(name) {
    console.log(`Namaste ${name} `)
}
greet("Ram")

let a = "Rahul"
greet(a)

// function add 2 numbers

function add(a, b) {
    console.log(a + b)
}

function square(x) {
    return x * x
}

add(5, 6)
let val = square(4)
console.log(val)



// check for eligible for vote or not

function eligibleToVote(age) {
    if (age < 0) {
        console.log("Invalid age")
    } else if (age < 18) {
        console.log("Note eligible for vote")
    } else {
        console.log("Eligible for Vote")
    }
}

eligibleToVote(30)
eligibleToVote(-5)



// No. is even or odd

function isEven(x) {
    if (x % 2 === 0) console.log("Even No")
    else console.log("Odd No")
}

isEven(4)
isEven(7)