/**
 * Medium
 * https://leetcode.com/problems/house-robber/
 */
function rob(profits: number[]): number {
	const maxProfits = new Array(profits.length + 1);
	maxProfits[0] = 0;
	maxProfits[1] = profits[0];
	for (let i = 2; i <= profits.length; i++) {
		maxProfits[i] = Math.max(
			maxProfits[i - 1],
			profits[i - 1] + maxProfits[i - 2]
		);
	}
	return maxProfits[profits.length];
}
