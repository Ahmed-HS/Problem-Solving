/**
 * Medium
 * https://leetcode.com/problems/rotate-array/
 */
function rotate(nums: number[], k: number): void {
	/**
	 * This is a brilliant and efficient method that
	 * involves reversing parts of the array to achieve
	 * the rotation in O(n) time complexity and O(1) space complexity.
	 * 1. Reverse the whole array.
	 * 2. Reverse the first `k` elements.
	 * 3. Reverse the rest of the array.
	 */
	k = k % nums.length;
	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
	function reverse(nums: number[], start: number, end: number) {
		while (start < end) {
			[nums[start], nums[end]] = [nums[end], nums[start]];
			start++;
			end--;
		}
	}
}
