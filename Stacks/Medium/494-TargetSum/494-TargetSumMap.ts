/**
 * Medium
 * https://leetcode.com/problems/target-sum/
 */
function findTargetSumWays(nums: number[], target: number): number {
	const waysCount = Array.from(
		{ length: nums.length + 1 },
		() => new Map<number, number>()
	);
	waysCount[0].set(0, 1);
	for (let i = 0; i < nums.length; i++) {
		for (const [sum, ways] of waysCount[i]) {
			const positive = waysCount[i + 1].get(sum + nums[i]) ?? 0;
			waysCount[i + 1].set(sum + nums[i], positive + ways);
			const negative = waysCount[i + 1].get(sum - nums[i]) ?? 0;
			waysCount[i + 1].set(sum - nums[i], negative + ways);
		}
	}
	return waysCount[nums.length].get(target) ?? 0;
}
