// https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/

/**
 * 
 * @param {number[]} arr 
 * use hash since dublicate 
 */
function numberAppearsOnce(arr){
    const objHolder=arr.reduce((acc,cur)=>{
        if(!acc[cur]) acc[cur]=0;
        acc[cur]++;
        return acc
    },{});
    // {1:2,2:2,3:1}
    for (const number in objHolder) {
        if (Object.hasOwnProperty.call(objHolder, number)) {
            const el = objHolder[number];
            if(el==1){
                return number
            }
        }
    }
}

// need to check optimal sol sth diff using xor