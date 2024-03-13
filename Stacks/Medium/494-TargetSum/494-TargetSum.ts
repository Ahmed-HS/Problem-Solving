/**
 * Medium
 * https://leetcode.com/problems/target-sum/
 */
function findTargetSumWays(nums: number[], target: number): number {
	const sum = nums.reduce((acc, num) => acc + num, 0);
	if ((sum + target) % 2 === 1 || target > sum || target < -sum) {
		return 0;
	}
	const positiveSum = (sum + target) / 2;
	const dp: number[] = new Array(positiveSum + 1).fill(0);
	dp[0] = 1;
	for (const num of nums) {
		for (let i = positiveSum; i >= num; i--) {
			dp[i] += dp[i - num];
		}
	}
	return dp[positiveSum];
}
