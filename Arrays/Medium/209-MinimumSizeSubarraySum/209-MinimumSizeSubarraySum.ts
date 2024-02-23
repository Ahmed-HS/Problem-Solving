/**
 * Medium
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */
function minSubArrayLen(target: number, nums: number[]): number {
	/**
	 * The idea is to use a sliding window to find the minimum length
	 * of a subarray that has a sum greater than or equal to the target.
	 * When the sum of the subarray is greater than or equal to the target,
	 * we can shrink the window from the left until the sum is less than the target
	 * to find the minimum length of the subarray.
	 */
	let sum = 0;
	let minimumLength = Number.POSITIVE_INFINITY;
	let start = 0;
	let end = 0;
	while (end < nums.length) {
		sum += nums[end];
		while (sum >= target) {
			minimumLength = Math.min(minimumLength, end - start + 1);
			sum -= nums[start];
			start++;
		}
		end++;
	}
	return minimumLength === Number.POSITIVE_INFINITY ? 0 : minimumLength;
}
