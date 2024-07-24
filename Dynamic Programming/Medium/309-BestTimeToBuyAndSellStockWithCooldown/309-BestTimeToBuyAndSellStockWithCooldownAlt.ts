/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 */
function maxProfit(prices: number[]): number {
	let sell = 0;
	let previousSell = 0;
	let buy = -Infinity;
	let previousBuy = buy;

	for (const currentPrice of prices) {
		previousBuy = buy;
		buy = Math.max(previousSell - currentPrice, previousBuy);
		previousSell = sell;
		sell = Math.max(previousBuy + currentPrice, previousSell);
	}

	return sell;
}
