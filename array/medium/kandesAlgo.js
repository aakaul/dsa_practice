// https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/

/**
 * 
 * @param {number[]} nums 
 */
function kadanesAlgo(nums) {
    let sum = 0;
    let max = -Infinity;
    let [start, ansStart, ansEnd] = [0, -1, -1]
    for (let i = 0; i < nums.length; i++) {

        if (sum == 0) start = i;

        if (sum == 0) start = i;
        const el = nums[i];
        sum += el;
        if (sum > max) {
            max = sum;

            ansStart = start;
            ansEnd = i;
        }
        if (sum < 0) {
            sum = 0
        }
    }


    //printing the subarray:
    console.log("The subarray is: [");
    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]n");


    return max;
}