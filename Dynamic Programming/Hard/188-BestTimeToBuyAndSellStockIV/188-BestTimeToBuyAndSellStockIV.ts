/**
 * Hard
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 */
function maxProfit(k: number, prices: number[]): number {
	const buyStock = new Array(k + 1).fill(-Infinity);
	const sellStock = new Array(k + 1).fill(0);

	for (const price of prices) {
		for (let i = 1; i <= k; i++) {
			// Max profit if we've just sold the i-th stock so far
			sellStock[i] = Math.max(sellStock[i], buyStock[i] + price);
			// Max profit if we've just bought the i-th stock so far
			buyStock[i] = Math.max(buyStock[i], sellStock[i - 1] - price);
		}
	}

	return sellStock[k];
}
