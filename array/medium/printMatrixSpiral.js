// https://leetcode.com/problems/spiral-matrix/


/**
 * 
 * @param {number[][]} mat 
 */
function printSpiralMatrix(mat){
    let right=0,left=0,bottom=mat.length-1,top=mat[0].length-1;
    let s =""
    while (right<=bottom&&left<=top) {

        // For moving left to right
        for (let i = left; i <= right; i++) {
            s+=mat[top][i]+",";
        }
        top++;

        // For moving top to bottom.
        for (let i = top; i < bottom; i++) {
            s+=mat[i][right]+",";            
        }
        right--;

        // For moving right to left.
        if(top<=bottom){
            for (let i = right; i >=left; i--) {
                s+=mat[bottom][i]+",";            
            }
            bottom--;
        }

        if(left<=right){
            for (let i = bottom; i <= top; i++) {
                s+=mat[i][left]+",";            
            }
            left++;
        }
    }

    console.log(s)
}