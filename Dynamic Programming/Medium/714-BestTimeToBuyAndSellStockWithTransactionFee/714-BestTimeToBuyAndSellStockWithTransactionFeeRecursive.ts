/**
 * Medium
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 */
function maxProfit(prices: number[], fee: number): number {
	const maximumProfit = Array.from({ length: prices.length }, () =>
		new Array(2).fill(undefined)
	);
	function maxProfit(current: number, isBuying: number) {
		if (current >= prices.length) return 0;
		if (maximumProfit[current][isBuying] !== undefined) {
			return maximumProfit[current][isBuying];
		}
		const skip = maxProfit(current + 1, isBuying);
		if (isBuying === 1) {
			const buy = maxProfit(current + 1, 0) - prices[current];
			maximumProfit[current][isBuying] = Math.max(buy, skip);
		} else {
			const sell = maxProfit(current + 1, 1) + prices[current] - fee;
			maximumProfit[current][isBuying] = Math.max(skip, sell);
		}
		return maximumProfit[current][isBuying];
	}
	return maxProfit(0, 1);
}
