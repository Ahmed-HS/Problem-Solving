/**
 * Medium
 * https://leetcode.com/problems/house-robber/
 */
function rob(profits: number[]): number {
	const seen = new Map<number, number>();
	function findMaxProfit(houseIndex: number) {
		if (houseIndex < 0) return 0;
		const savedProfit = seen.get(houseIndex);
		if (savedProfit !== undefined) return savedProfit;
		const maxProfit = Math.max(
			findMaxProfit(houseIndex - 1),
			profits[houseIndex] + findMaxProfit(houseIndex - 2)
		);
		seen.set(houseIndex, maxProfit);
		return maxProfit;
	}
	return findMaxProfit(profits.length - 1);
}
