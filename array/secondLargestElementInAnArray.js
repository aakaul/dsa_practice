// https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/



function secondLargestElementInAnArray(array) {
    array.sort((a, b) => {
        return a - b;
    })
    return array[array.length - 2];
}