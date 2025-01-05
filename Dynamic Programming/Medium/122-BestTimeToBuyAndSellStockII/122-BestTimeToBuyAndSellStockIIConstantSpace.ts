/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
function maxProfit(prices: number[]): number {
	let sell = 0;
	let buy = -Infinity;
	for (const price of prices) {
		buy = Math.max(sell - price, buy); // Buy
		sell = Math.max(buy + price, sell); // Sell
	}
	return sell;
}
