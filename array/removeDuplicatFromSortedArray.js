// https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/

function removeDuplicatFromSortedArray(array) {
    return array.filter((element,
        i) => array.indexOf(element) === i);
}