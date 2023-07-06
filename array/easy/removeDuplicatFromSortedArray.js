// https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/
/**
 * @param {number[]} arr 
 * @returns number[]
 * @description returns the largest element from the array
 */
function removeDuplicateFromSortedArray(arr){
    let arrHolder = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el!=arr[i+1]){
            arrHolder.push(el)
        }
    }
    return arrHolder
}