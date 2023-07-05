// https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/


// https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/

/**
 * @param {number[]} arr 
 * @returns number
 * @description returns the second largest element from the array
 */
function secondLargestElementInAnArray(arr){
    let max = -Infinity;
    let secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(el>max){
            secondLarge=max
            max=el;
        }else if(el!=max&&el>secondLarge){
            secondLarge=el;
        }
    }
    return secondLarge
}
//need to check usnig 2 pointer