/**
 * Hard
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 */
function maxProfit(k: number, prices: number[]): number {
	const maximumProfit = Array.from({ length: prices.length }, () =>
		new Array(k + 1).fill(undefined)
	);
	function maxProfit(day: number, transactionsLeft: number) {
		if (day === prices.length || transactionsLeft === 0) return 0;
		if (maximumProfit[day][transactionsLeft] !== undefined) {
			return maximumProfit[day][transactionsLeft];
		}
		// Choice 1: No transaction today
		const skip = maxProfit(day + 1, transactionsLeft);

		// Choice 2: Buy or sell
		const isBuying = transactionsLeft % 2 === 0;

		if (isBuying) {
			maximumProfit[day][transactionsLeft] = Math.max(
				skip,
				-prices[day] + maxProfit(day + 1, transactionsLeft - 1)
			);
		} else {
			maximumProfit[day][transactionsLeft] = Math.max(
				skip,
				+prices[day] + maxProfit(day + 1, transactionsLeft - 1)
			);
		}
		return maximumProfit[day][transactionsLeft];
	}
	return maxProfit(0, k * 2);
}
