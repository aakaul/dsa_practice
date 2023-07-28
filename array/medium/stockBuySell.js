// https://takeuforward.org/data-structure/stock-buy-and-sell/

// Difficulty: Medium

/**
 *  
 * @param {number[]} params
 * @returns {number}
 * @description
 *  
 * 1. Find the local minima and store it as starting index. If not exists, return.
 * 2. Find the local maxima. and store it as ending index. If we reach the end, set the end as ending index.
 * 3. Update the solution (Increment count of buy sell pairs)
 * 4. Repeat the above steps if end is not reached.
 * 
 * @example
 * 
 * Input: [100, 180, 260, 310, 40, 535, 695]
 * Output: 865
 *
 * Explanation:
 * 
 * The points of interest are highlighted in the above diagram.
 * The stock price of 310 is greater than the stock price of 260 on day 3.
 * The stock price of 40 is less than the stock price of 310 on day 4.
 * 
 * @complexity
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * 
 * @link
 * https://www.geeksforgeeks.org/stock-buy-sell/
 * 
 * 
 * @link
 * https://www.youtube.com/watch?v=JaosdXkUWTs
 * 
 */

function stockBuyAndSell(params) {
    let min = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < params.length; i++) {
        const el = params[i];
        if (el < min) {
            min = el
        }
        let profit = el - min;
        if (maxProfit < profit) {
            maxProfit = profit
        }
    }

    return maxProfit
}