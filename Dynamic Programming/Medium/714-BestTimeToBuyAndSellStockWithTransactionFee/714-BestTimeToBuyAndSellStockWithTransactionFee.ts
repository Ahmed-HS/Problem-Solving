/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */
function maxProfit(prices: number[], fee: number): number {
	let hasStock = 0;
	let hasStockYesterday = -Infinity;
	let noStock = 0;
	let noStockYesterday = 0;
	for (const price of prices) {
		hasStock = Math.max(hasStockYesterday, noStockYesterday - price);
		noStock = Math.max(noStockYesterday, hasStockYesterday + price - fee);
		noStockYesterday = noStock;
		hasStockYesterday = hasStock;
	}
	return noStock;
}
