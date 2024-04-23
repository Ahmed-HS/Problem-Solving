/**
 * Easy
 * https://leetcode.com/problems/binary-search/
 */
function search(nums: number[], target: number): number {
	/**
	 * This implementation of binary search finds
	 * the last occurrence of the target.
	 * When finding the midpoint, we use the right
	 * middle index to avoid an infinite loop.
	 * When the midpoint is less than or equal
	 * to target, we move the start pointer to
	 * the midpoint. for example, if the array is
	 * [1 , 1] if the left middle index is used
	 * we will have an infinite loop. as the
	 * midpoint will always be 0 and the start
	 * pointer will also always be 0, and the
	 * loop will never end.
	 */
	let start = 0;
	let end = nums.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start + 1) / 2);
		if (nums[mid] <= target) {
			start = mid;
		} else {
			end = mid - 1;
		}
	}
	return nums[start] === target ? start : -1;
}
