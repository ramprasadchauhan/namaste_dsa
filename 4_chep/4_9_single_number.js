/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

const singleNumber = (nums) => {
    let sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i]
    }
    return nums[nums.length - 1]
}

// By hash able

const singleNumber1 = (nums) => {
    const map = new Map();

    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    // find key with value 1
    for (let [key, value] of map.entries()) {
        if (value === 1) return key;
    }
};


const singleNumber2 = (nums) => {
    let has = {};
    for (let i = 0; i < nums.length; i++) {
        if (!has[nums[i]]) {
            has[nums[i]] = 1;
        } else {
            has[nums[i]]++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (has[nums[i]] === 1) return nums[i]
    }
}

// by using xor operation
//  a xor 0 = a
//  a xor a = 0

const singleNumber3 = (nums) => {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res = res ^ nums[i]
    }
    return res
}

console.log(singleNumber3([4, 1, 2, 1, 2]))