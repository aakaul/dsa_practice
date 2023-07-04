// https://takeuforward.org/data-structure/left-rotate-the-array-by-one/

function leftRotateArrayByOnePlace(array) {
    let tempArray = [];
    for (let i = 1; i < array.length; i++) {
        tempArray.push(array[i])
    }
    tempArray.push(array[0]);
    return tempArray;
}