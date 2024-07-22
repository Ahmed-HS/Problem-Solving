/**
 * Easy
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
function maxProfit(prices: number[]): number {
	let profit = 0;
	let minimumPrice = Infinity;
	for (const price of prices) {
		profit = Math.max(profit, price - minimumPrice);
		minimumPrice = Math.min(minimumPrice, price);
	}
	return profit;
}
