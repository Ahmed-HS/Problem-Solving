/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
function maxProfit(prices: number[]): number {
	const profits = Array.from({ length: prices.length }, () => new Array(2));
	profits[0][0] = 0;
	profits[0][1] = -prices[0];
	for (let i = 1; i < prices.length; i++) {
		// Buy
		profits[i][1] = Math.max(
			profits[i - 1][0] - prices[i],
			profits[i - 1][1]
		);
		// Sell
		profits[i][0] = Math.max(
			profits[i - 1][1] + prices[i],
			profits[i - 1][0]
		);
	}
	return profits[prices.length - 1][0];
}
