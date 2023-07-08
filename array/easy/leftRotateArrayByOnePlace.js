// https://takeuforward.org/data-structure/left-rotate-the-array-by-one/
/**
 * 
 * @param {number[]} arr 
 */
function leftRotateArrayByOnePlace(arr){
    return [...arr.slice(1),arr[0]]
}