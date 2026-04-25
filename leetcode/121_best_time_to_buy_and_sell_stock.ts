// Problem link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let p1 = 0
    let maxProfit = 0

    for (let p2 = 0; p2 < prices.length; p2++) {
        if (prices[p2] < prices[p1]) {
            p1 = p2
        }
        maxProfit = Math.max(maxProfit, prices[p2] - prices[p1])
    }

    return maxProfit
}
