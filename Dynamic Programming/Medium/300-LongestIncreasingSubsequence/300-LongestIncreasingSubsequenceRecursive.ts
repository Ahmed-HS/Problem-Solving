/**
 * Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(numbers: number[]): number {
	const maxLIS = Array.from({ length: numbers.length + 1 }, () =>
		new Array(numbers.length).fill(undefined)
	);
	function lengthOfLIS(length: number, lastIndex: number) {
		if (length === 0) return 0;
		if (maxLIS[length][lastIndex] !== undefined) {
			return maxLIS[length][lastIndex];
		}
		if (lastIndex != -1 && numbers[length - 1] >= numbers[lastIndex]) {
			maxLIS[length][lastIndex] = lengthOfLIS(length - 1, lastIndex);
			return maxLIS[length][lastIndex];
		}
		const take = 1 + lengthOfLIS(length - 1, length - 1);
		const leave = lengthOfLIS(length - 1, lastIndex);
		maxLIS[length][lastIndex] = Math.max(take, leave);
		return maxLIS[length][lastIndex];
	}
	return lengthOfLIS(numbers.length, -1);
}
