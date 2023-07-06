// https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/

/**
 * @param {number[]} arr 
 * @returns number
 * @description returns the largest element from the array
 */
function largestElementInAnArray(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        max=Math.max(el,max)
    }
    return max
}