// https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/



function longestSubArrayWithGivenSum(array, k) {

    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    let length = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];

        const diff = sum - k;

        if (map.has(diff)) {
            length = Math.max(length, i - map.get(diff));
        }

        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return length;

}