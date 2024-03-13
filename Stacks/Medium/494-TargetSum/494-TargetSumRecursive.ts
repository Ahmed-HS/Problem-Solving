/**
 * Medium
 * https://leetcode.com/problems/target-sum/
 */
function findTargetSumWays(nums: number[], target: number): number {
	const seen = new Map<string, number>();
	function numberOfWays(start: number, sum: number) {
		if (start === nums.length) {
			return sum === target ? 1 : 0;
		}
		const key = `${start}:${sum}`;
		if (seen.has(key)) {
			return seen.get(key);
		}
		const waysCount =
			numberOfWays(start + 1, sum + nums[start]) +
			numberOfWays(start + 1, sum - nums[start]);
		seen.set(key, waysCount);
		return waysCount;
	}
	return numberOfWays(0, 0);
}
