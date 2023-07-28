// https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/

/**
 * 
 * @param {number[]} params 
 */
//[100,4,200,1,3,2]
function longestConsecutive(params) {
    const obj = params.reduce((acc, cur) => {
        acc[cur] = true
        return acc
    }, {})

    let maxCount = 0
    for (let i = 0; i < params.length; i++) {
        const el = params[i];
        if (obj[el - 1]) {
            continue;
        }
        let tempEl = el;
        let tempMaxCount = 0;
        while (obj[tempEl]) {
            tempMaxCount++;
            tempEl++;
        }
        maxCount = Math.max(maxCount, tempMaxCount);
    }
    return maxCount
}

longestConsecutive([100, 4, 200, 1, 3, 2])