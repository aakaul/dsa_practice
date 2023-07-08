// https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/

/**
 * 
 * @param {number[]} arr 
 */
function consecutiveOnes(arr){
    let max = -Infinity;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el==1){
            counter++;
            max=Math.max(counter,max)
        }else{
            counter=0;
        }
    }
    return max
}