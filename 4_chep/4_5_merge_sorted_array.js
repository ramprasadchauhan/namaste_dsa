
let a = [1, 2, 3, 4, 5, 6]

let b = a.slice(0, 3)
console.log(a)
console.log(b)

const merge = function (nums1, m, nums2, n) {
    nums1.length = m;

    // Merge nums1 and nums2
    nums1.push(...nums2);

    // Sort nums1 in-place
    nums1.sort((a, b) => a - b);
    return nums1;

};

const merge1 = (nums1, m, nums2, n) => {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1]
            p1++
        } else {
            nums1[i] = nums2[i]
            p2++
        }
    }
}

const merge2 = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
}