// https://takeuforward.org/data-structure/linear-search-in-c/


function linearSearch(array, k) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === k) return i;
    }

    return -1;
}