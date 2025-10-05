/**
 ****
 ****
 ****
 ****
 */

function squarePattern(n) {

    for (let i = 0; i < n; i++) {
        let res = ""
        for (let j = 0; j < n; j++) {
            res += "* "
        }
        console.log(res)
    }
}

// squarePattern(5)

/**
 *
 * * 
 * * *
 * * * *
 */

function rightHalfPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = ""
        for (let j = 0; j <= i; j++) {
            res = res + "* "
        }
        console.log(res)
    }

}

// rightHalfPyramid(5)

/**
 1
 1 2
 1 2 3
 1 2 3 4
 */

function numberIncreasingPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = ""
        for (let j = 0; j <= i; j++) {

            res = res + " " + (j + 1)
        }
        console.log(res)
    }
}


// numberIncreasingPyramid(5)

/**
 1
 2 2
 3 3 3
 4 4 4 4
 */

function numberPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j <= i; j++) {
            res = res + " " + (i + 1)
        }
        console.log(res)
    }
}

// numberPyramid(5)

/**
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

 */

function numberIncreasingReversePyramid(n) {
    // or also can do i from 0 to n, and j from 0 to n-i, res = res + (j+1)
    for (let i = n; i > 0; i--) {
        let res = "";
        for (let j = 0; j < i; j++) {
            res = res + " " + (j + 1)
        }
        console.log(res)
    }
}

// numberIncreasingReversePyramid(4)

/**
* * * *
* * *
* *
*
 */

function reverseRightHalfPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = n - i; j > 0; j--) {
            res = res + "* "
        }
        console.log(res)
    }
}

// reverseRightHalfPyramid(5)


/**
     *
   * * 
 * * *
 */

function leftHalfPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j < n; j++) {
            if (i + j >= n - 1) {
                res = res + "* "
            } else {
                res = res + "  "
            }
        }
        console.log(res)
    }
}

// leftHalfPyramid(5)


function leftHalfPyramid1(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j < n - (i + 1); j++) {
            res = res + "  "
        }
        for (let k = 0; k < i + 1; k++) {
            res = res + "* "
        }
        console.log(res)
    }
}
// leftHalfPyramid1(4)

/**
 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 */

function numberOneZeroPyramid(n) {
    for (let i = 0; i < n; i++) {
        let res = "";
        for (let j = 0; j <= i; j++) {
            if (j % 2 == 0) {
                res = res + "1 "
            } else {
                res = res + "0 "
            }
        }
        console.log(res)
    }
}
numberOneZeroPyramid(5)

