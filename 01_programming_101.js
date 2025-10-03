console.log("Hello, World!");
console.log(true + 1)

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum);
console.log(String(3) + 4)

const arr = [1, 2, 3, 4, 5];
console.log(arr[2]);
arr.push(6);
arr[7] = 7;
console.log(arr[6]);
console.log(arr)
console.log(arr.length);

console.log(typeof arr);

let obj = {
    a: 7,
    name: "Ram",
    bool: true
}

console.log(obj.name, obj.a)

const power = (a, b) => {
    return Math.pow(a, b);
}

console.log(power(2, 3))