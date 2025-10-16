// reverse the integer

function reverseInteger(x) {

    let abs = Math.abs(x)
    let reverse = 0;
    while (abs > 0) {
        let rem = abs % 10;
        reverse = reverse * 10 + rem;
        abs = Math.floor(abs / 10)
    }
    let limit = Math.pow(2, 31)
    let res = x < 0 ? -reverse : reverse
    return (res < -limit || res > limit) ? 0 : res
}

console.log(reverseInteger(2147483648))