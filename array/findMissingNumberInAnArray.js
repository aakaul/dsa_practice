// https://takeuforward.org/arrays/find-the-missing-number-in-an-array/

/**
 * 
 * @param {number[]} arr 
 * n(n+1)/2
 * 
 */
function findMissingNumberInAnArray(arr){
    const arrSum = arr.reduce((acc,cur)=>acc+=cur,0)
    const sum = arr.at(-1)(arr.at(-1)+1)/2;
    return sum - arrSum
}

//[1,2,3,5]
//1+2+3+5 => 11
// 5(5+1)/2=>15