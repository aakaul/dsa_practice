// https://takeuforward.org/arrays/find-the-missing-number-in-an-array/



function findMissingNumberInAnArray(N,array) {
    
    const set = new Set();

    for (let i = 0; i < array.length; i++) {
        set.add(array[i]);
    }

    for (let index = 1; index <= N; index++) {
        if (set.has(index) === false) {
            return index;
        }
        
    }

    return -1;
}
