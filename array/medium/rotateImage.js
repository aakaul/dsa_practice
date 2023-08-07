// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} a
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = a[i][j]
            a[i][j]=a[j][i]
            a[j][i]=temp
        }
    }
    a.map(x=>x.reverse());
    return;
};