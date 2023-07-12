// https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/



function longestSubArrayWithSumK(array , k) {

    let p1 = 0;
    let p2 = 0;

    let sum = 0;
    let length = 0;
    while (p2 < array.length) {
        
        sum += array[p2];

        while (sum > k) {
            sum -= array[p1];
            p1++;
        }

        if (sum === k) {
            length = Math.max(length, p2 - p1 + 1);
        }

        p2++;
    }

    return length;
    
}