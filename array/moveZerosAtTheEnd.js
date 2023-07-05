// https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/

/**
 * 
 * @param {number[]} arr 
 */
function moveZerosToTheEnd(arr){
    let i=0,j=0;
    while(i<arr.length&&j<arr.length){
        if(arr[i]==0){
            if(arr[j]!=0){
                let temp = arr[i];
                arr[i]=arr[j]
                arr[j]=temp
                i++;
                j=i;
            }else{
                j++;
            }
        }else{
            i++;
            j++;
        }
    }
    return arr
}

