// https://takeuforward.org/arrays/rearrange-array-elements-by-sign/

/**
 * 
 * @param {number[]} params 
 */
function rearrange(params) {
    let negativeIndex = 1;
    let positiveIndex = 0;
    for (let i = 0; i < params.length; i++) {
        const el = params[i];
        if (el < 0) {
            params[negativeIndex] = el;
            negativeIndex += 2
        } else {
            params[positiveIndex] = el;
            positiveIndex += 2
        }
    }
}