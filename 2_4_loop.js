// reduce the repetative task is solve by loop

// write Hello 20 times

// for (let i = 0; i < 20; i++) {
//     console.log("Hello world", i)
// }

// for (let i = 2; i < 9; i += 2) {
//     console.log("Hello world")
// }

function greet() {
    console.log("Namaste")
}

// for (let i = 5; i > 0; i--) {
//     console.log("Hello world")
// }

let arr = [10, 3, 5, 4, 8, 6]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}


//  While loop

let i = 0
while (i < 5) {
    console.log(i)
    i++
}