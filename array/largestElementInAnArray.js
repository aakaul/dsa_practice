// https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/


function largestElement(array) {
    let largestElement = 0;
    for (let index = 0; index < array.length; index++) {
        largestElement = Math.max(largestElement, array[index])
    }
    return largestElement;
}
