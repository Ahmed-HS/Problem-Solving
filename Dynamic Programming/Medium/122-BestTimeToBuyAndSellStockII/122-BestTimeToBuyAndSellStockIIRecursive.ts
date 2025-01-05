/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
function maxProfit(prices: number[]): number {
	const profits = Array.from({ length: prices.length }, () =>
		new Array(2).fill(undefined)
	);
	function findMaxProfit(day: number, canBuy: number = 1) {
		if (day === prices.length) return 0;
		if (profits[day][canBuy] !== undefined) return profits[day][canBuy];
		const skip = findMaxProfit(day + 1, canBuy);
		let transaction = 0;
		if (canBuy === 1) {
			transaction = findMaxProfit(day + 1, 0) - prices[day]; // Buy
		} else {
			transaction = findMaxProfit(day + 1, 1) + prices[day]; // Sell
		}
		profits[day][canBuy] = Math.max(transaction, skip);
		return profits[day][canBuy];
	}
	return findMaxProfit(0);
}
