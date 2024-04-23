/**
 * Easy
 * https://leetcode.com/problems/binary-search/
 */
function search(nums: number[], target: number): number {
	/**
	 * This implementation of binary search finds
	 * the first occurrence of the target.
	 * When finding the midpoint, we use the left
	 * middle index to avoid an infinite loop.
	 * When the midpoint is greater than or equal
	 * to the target, we move the end pointer to
	 * the midpoint. for example, if the array is
	 * [1 , 1] if the right middle index is used
	 * we will have an infinite loop. as the
	 * midpoint will always be 1 and the end
	 * pointer will also always be 1, and the
	 * loop will never end.
	 */
	let start = 0;
	let end = nums.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (nums[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return nums[start] == target ? start : -1;
}
