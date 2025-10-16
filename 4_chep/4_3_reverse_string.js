/**
 Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 */

const reverseString = (s) => {
    let l = s.length
    let limit = s.length % 2 === 1 ? Math.floor(s.length / 2) : (s.length / 2) - 1
    for (let i = 0; i <= limit; i++) {
        [s[i], s[l - i - 1]] = [s[l - i - 1], s[i]]
    }
    return s
}

console.log(reverseString([]))