/**
 * Easy
 * https://leetcode.com/problems/search-insert-position/
 */
function searchInsert(nums: number[], target: number): number {
	let start = 0;
	let end = nums.length - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
