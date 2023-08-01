// https://takeuforward.org/data-structure/set-matrix-zero/
/**
 * 
 * @param {number[][]} params 
 * @returns {number[][]}
 */
function setZeroes(params) {
    let col0 = 1;
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[0].length; j++) {
            const el = params[i][j];
            if (el == 0) {
                params[i][0] = 0;
                if (j == 0) {
                    col0 = 0
                } else {
                    params[0][j] = 0
                }
            }

        }
    }

    for (let i = 1; i < params.length; i++) {
        for (let j = 1; j < params[0].length; j++) {
            if (params[i][j] != 0 && (params[i][0] == 0 || params[0][j] == 0)) {
                params[i][j] = 0
            }
        }
    }

    if (params[0][0] == 0) {
        for (let j = 0; j < params[0].length; j++) {
            params[0][j] = 0
        }
    }

    if (col0 == 0) {
        for (let i = 0; i < params.length; i++) {
            params[i][0] = 0
        }
    }

    return params
}