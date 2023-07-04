// https://takeuforward.org/data-structure/rotate-array-by-k-elements/


function leftRotateArrayByDPlace(array, d) {
    let tempArray = [];
    for (let i = d; i < array.length; i++) {
        tempArray.push(array[i])
    }
    for (let i = 0; i < d; i++) {
        tempArray.push(array[i])
    }
    return tempArray;
}