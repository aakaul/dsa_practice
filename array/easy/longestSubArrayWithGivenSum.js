// https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/

// A subarray is a contiguous part of array. An array that is inside another array. For example, consider the array [1, 2, 3, 4], There are 10 non-empty sub-arrays. The subarrays are [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4]. In general, for an array/string of size n, there are n*(n+1)/2 non-empty subarrays/subsrings.

// Given an array of integers and an integer k, write a program to find length of the longest subarray having sum k. We may assume that there are no zeros in the array.
// Examples:
// Input : arr[] = { 10, 5, 2, 7, 1, 9 },
// k = 15
// Output : 4
// The sub-array is {5, 2, 7, 1}.
// Input : arr[] = {-5, 8, -14, 2, 4, 12},
// k = -5
// Output : 5
// The sub-array is {-5, 8, -14, 2, 4}

/**
 * 
 * @param {number[]} params 
 * @param {number} k 
 * @returns {number}
 */
/**
 * @param {number[]} params
 * @param {number} k
 * @returns {number}
 */
function longestSubArrayWithGivenSum(params, k) {
    let maxCount = 0;
    let i = 0;
    while (i < params.length) {
      let sum = params[i];
      if (sum === k) {
        maxCount = Math.max(maxCount, 1);
      }
  
      let j = i + 1;
      while (j < params.length) {
        sum += params[j];
        if (sum === k) {
          maxCount = Math.max(maxCount, j - i + 1);
        }
        j++;
      }
      i++;
    }
    return maxCount;
  }

//approach 2 using 2 pointer from the video

/** 
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {number}
 */
function longestSubArrayWithGivenSum2(arr,k){
    let i=0,j=0;
    let max=0
    let sum = arr[i]
    while(j<arr.length){

        while (i<=j&&sum>k) {
            sum=-arr[i]
            i++;
        }

        if(sum==k){
            max=Math.max(max,j-i+1)
        }

        j++;

        if(j<arr.length) sum+=arr[j]
    }

    return max
}

longestSubArrayWithGivenSum2([1,2],3)