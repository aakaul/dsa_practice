// https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/

/**
 * 
 * @param {number[]} nums 
 */
// using hashing
function majorityElement(nums) {
    const obj = nums.reduce((acc, cur) => {
        if (!acc[cur]) {
            acc[cur] = 0
        }
        acc[cur]++;
        return acc
    }, 0)
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const el = obj[key];
            if (el > nums.length) {
                return key
            }
        }
    }
    return -1
}

// from video using Moore’s Voting Algorithm:
/**
 * 
 * @param {number[]} nums 
 */
function majorityElement2(nums) {

    let sum = 0;
    let el = null;
    for (let i = 0; i < nums.length; i++) {

        if (sum == 0) {
            sum++;
            el = nums[i]
        };

        if (el != nums[i]) {
            sum--;
        } else {
            sum++;
        }
    }

    /* 
        need to check this ref https://www.youtube.com/watch?v=n5QY3x_GNDg
        if(counter > 2){
            return el
        }
        
    */
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (el == nums[i]) counter++
    }

    if (counter > nums.length / 2) {
        return el
    }

    return -1

}