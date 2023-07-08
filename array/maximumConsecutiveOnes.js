// https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/


function maximumConsecutiveOnes(array) {

    let p1 = 0;
    let p2 = 0;
    let maxCount = 0;

    while (p2 < array.length) {
        if (array[p2] === 1) {
            p2++;
        } else {
            maxCount = Math.max(maxCount, p2 - p1);
            p2 = p2 + 1;
            p1 = p2;
        }
    }

    maxCount = Math.max(maxCount, p2 - p1);

    return maxCount;
}