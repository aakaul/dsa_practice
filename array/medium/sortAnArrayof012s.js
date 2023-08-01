// https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/
//This problem is a variation of the popular Dutch National flag algorithm.
/**
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @returns {number[]} 
 */
function sortZerosOnesAndTwos(arr, k) {
    let [low, mid, high] = [0, 0, arr.length]
    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid)
            mid++;
            low++;
        } else if (arr[mid] == 1) {
            mid++
        } else {
            swap(arr, mid, high)
            high--;
        }
    }
    return arr
}
//swap function
/**
 * 
 * @param {number[]} arr 
 * @param {number} i 
 * @param {number} j 
 */
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}