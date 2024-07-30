/**
 * Hard
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 */
function maxProfit(prices: number[]): number {
	let buyFirstStock = -Infinity;
	let buySecondStock = -Infinity;
	let sellFirstStock = 0;
	let sellSecondStock = 0;

	for (const price of prices) {
		// Max profit if we've just sold the second stock so far
		sellSecondStock = Math.max(sellSecondStock, buySecondStock + price);
		// Max profit if we've just bought the second stock so far
		buySecondStock = Math.max(buySecondStock, sellFirstStock - price);
		// Max profit if we've just sold the first stock so far
		sellFirstStock = Math.max(sellFirstStock, buyFirstStock + price);
		// Max profit if we've just bought the first stock so far
		buyFirstStock = Math.max(buyFirstStock, -price);
	}

	return sellSecondStock;
}
