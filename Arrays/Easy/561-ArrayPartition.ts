/**
 * Easy
 * https://leetcode.com/problems/array-partition/
 */
function arrayPairSum(nums: number[]): number {
	/**
	 * We need to group the numbers into pairs
	 * such that the sum of the minimum number of each pair is maximized.
	 * To do this, we can sort the numbers to ensure that
	 * the minimum of each pair is as large as possible.
	 * We take the first number in every pair by skipping even elements.
	 */
	nums.sort((a, b) => a - b);
	let pairSum = 0;
	for (let i = 0; i < nums.length; i += 2) {
		pairSum += nums[i];
	}
	return pairSum;
}
