// https://takeuforward.org/data-structure/linear-search-in-c/

function linearSearch(arr,num){
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el==num){
            return i
        }
    }
    return -1
}
