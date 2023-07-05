// https://takeuforward.org/data-structure/union-of-two-sorted-arrays/

/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns 
 */
function unionOfTwoSortedArrays(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]
}
//need to check 2 pointre sol