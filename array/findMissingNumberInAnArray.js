// https://takeuforward.org/arrays/find-the-missing-number-in-an-array/

/**
 * 
 * @param {number[]} arr 
 */
function findMissingNumberInAnArray(arr){
    const arrSum = arr.reduce((acc,cur)=>acc+=cur,0)
    const sum = arr[0](arr[0]+1)/2;
    return sum - arrSum
}