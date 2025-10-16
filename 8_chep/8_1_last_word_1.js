// leetcode 58

const lengthOfLastWord = function (s) {
    s = ((s.trim()).split(" "))
    return s[s.length - 1].length
};
// TC is O(n) and Space complexity is O(n)


const lengthOfLastWord2 = function (s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            count = count + 1
        } else {
            if ((s[i] === " ") && count > 0) {
                break;
            }
        }
    }
    return count
};

const lengthOfLastWord3 = (s) => {
    let n = s.length - 1;
    // trim the last spaces
    while (n >= 0) {
        if (s[n] == " ") {
            n--
        } else {
            break;
        }
    }

    let count = 0;
    // start count of last word length
    while (n >= 0) {
        if (s[n] !== " ") {
            count++;
            n--
        } else {
            break;
        }
    }
    return count
}

// TC is O(n) and SC is O(1)

console.log(lengthOfLastWord("   fly me   to   the moonee  "))
console.log(lengthOfLastWord2("Ram  "))
