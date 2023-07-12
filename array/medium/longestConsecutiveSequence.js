// https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/#:~:text=Longest%20Consecutive%20Sequence%20in%20an%20%E2%80%A6




function longestConsecutiveSequence(arr) {
    if (arr.length === 0) {
        return 0;
    }

    arr.sort((a, b) => a - b);

    let length = 1;
    let current = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            if (arr[i] === arr[i - 1] + 1) {
                current += 1;
            } else {
                length = Math.max(length, current);
                current = 1;
            }
        }
    }
    
    return Math.max(length, current);
}