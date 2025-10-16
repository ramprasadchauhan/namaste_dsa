const removeDuplicates = (nums) => {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
        }
    }
    console.log(set)
    return set.size
}

const removeDuplicates1 = (nums) => {
    const originalLength = nums.length
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }

    return nums
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 4]))
console.log(removeDuplicates1([1, 2, 3, 3, 4, 3, 4]))
