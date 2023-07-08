// https://takeuforward.org/data-structure/check-if-an-array-is-sorted/


/**
 * @param {number[]} arr 
 * @returns boolean
 * @description returns true if array is sorted
 */
function checkIfArrayIsSorted(arr){
    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        if(el<arr[i-1]){
            return false
        }
    }
    return true
}