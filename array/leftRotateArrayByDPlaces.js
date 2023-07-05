// https://takeuforward.org/data-structure/rotate-array-by-k-elements/

/**
 * 
 * @param {number[]} arr 
 * @param {number} d
 */
// optimal sol use reversal algo
function leftRotateArrayByDPlace(arr,d){
    if(d>arr.length) d = d%arr.length;
    return [...arr.slice(d),...arr.slice(0,d)]
}