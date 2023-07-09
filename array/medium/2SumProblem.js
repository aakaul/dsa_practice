// https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/

/**
 * 
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {"Yes"|"No"}
 */
function twoSumCheck(arr,k){
    const totalObj=arr.reduce((acc,cur,i)=>{
        acc[cur]=i
        return acc
    },{});
    for (const key in totalObj) {
        if (Object.hasOwnProperty.call(totalObj, key)) {
            let remainingSum = k-Number(key);
            if(totalObj[remainingSum]){
                return"Yes"
            }
        }
    }
    return "No"
}