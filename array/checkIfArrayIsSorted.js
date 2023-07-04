// https://takeuforward.org/data-structure/check-if-an-array-is-sorted/




function isArraySorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] && array[i] < array[i + 1]) {
            return true;
        }
        else {
            return false;
        }
    }
}