// https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/

//sliding window approach as in previous snippet will work hence not using it here
//using logic of hashmap from the videos
/**
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @returns {number} 
 */
function longestSubArrayWithGivenSumPositiveNegative(arr,k){
    let map = new Map();
    let max=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum==k){
            max=Math.max(max,i+1);
        }
        let remainingSum = sum-k;
        if(map.has(remainingSum)){
            max = Math.max(max,i-map.get(remainingSum));
        }
        //incase zeros are present in the array
        if(!map.has(sum)){
            map.set(sum,i);
        }
    }
    return max;
}