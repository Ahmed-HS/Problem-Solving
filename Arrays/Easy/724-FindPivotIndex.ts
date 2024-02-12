/**
 * Easy
 * https://leetcode.com/problems/find-pivot-index/
 */
function pivotIndex(nums: number[]): number {
	/**
	 * The pivot index is the point where the sum
	 * of all numbers to its left is equal
	 * to the sum of all numbers to its right.
	 * The number at the pivot index is not
	 * included in either sum.
	 */
	let rightSum = nums.reduce((sum, current) => sum + current, 0);
	let leftSum = 0;

	for (const i of nums.keys()) {
		// Remove the current number from the right sum.
		rightSum -= nums[i];
		// The right sum now contains the sum of all numbers after index i.
		// The left sum now contains the sum of all numbers before index i.
		if (leftSum === rightSum) {
			return i;
		}
		leftSum += nums[i];
	}

	return -1;
}
