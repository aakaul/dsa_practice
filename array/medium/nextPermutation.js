// https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/

/**
 * 
 * @param {number[]} params 
 */
function nextPermutation(params) {
    if (params.length == 1) {
        return params
    }
    if (params.length == 2) {
        swap(params, 0, 1)
        return
    }
    let minIndex = params.length - 1;
    let pivotIndex = -1;
    for (let i = params.length - 1; i > 0; i--) {
        const el = params[i];
        if (params[i - 1] < params[i]) {
            pivotIndex = i - 1
            break;
        }
    }
    if (pivotIndex == -1) {
        return reverse(params, 0)

    }
    for (let i = pivotIndex; i < params.length; i++) {
        if (params[i] < params[minIndex]) {
            minIndex = i;
            break;
        }
    }
    if (pivotIndex != -1) {
        swap(params, pivotIndex, minIndex)
        reverse(params, pivotIndex + 1)
    } else {
        params.sort((a, b) => a - b)
    }
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} startIdx 
 */
function reverse(arr, startIdx) {
    let i = startIdx || 0;
    let j = arr.length - 1
    while (i < j) {
        swap(arr, i, j)
        j--;
        i++
    }

}

/**
 * 
 * @param {number[]} params 
 * @param {number} i 
 * @param {number} j 
 */
function swap(params, i, j) {
    let temp = params[i];
    params[i] = params[j];
    params[j] = temp
}

/* 
Sol:

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutationSol = function (nums) {
    var len = nums.length;
    var i = len - 2;
    var j = len - 1;

    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        while (j > i && nums[j] <= nums[i]) {
            console.log("j" + nums[j], "i" + nums[i])
            j--
        };
        swapSol(nums, i, j);
        reverseSol(nums, i + 1, len - 1);
    } else {
        reverseSol(nums, 0, len - 1);
    }
};

var swapSol = function (arr, from, to) {
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
};

var reverseSol = function (arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
};
