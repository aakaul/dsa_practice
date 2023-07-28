// https://takeuforward.org/data-structure/leaders-in-an-array/

// Difficulty: Medium
/**
 * 
 * @param {number[]} params 
 */
function leader(params) {
    const resultArr = [params[params.length - 1]]

    let max = params[params.length - 1];
    for (let i = params.length - 1; i >= 0; i--) {
        if (params[i] > max) {
            resultArr.push(max)
            max = params[i]
        }
    }

    for (let i = resultArr.length; i >= 0; i--) {
        console.log(resultArr[i])
    }
}