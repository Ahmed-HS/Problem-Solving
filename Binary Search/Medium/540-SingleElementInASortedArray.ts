/**
 * Medium
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 */
function singleNonDuplicate(nums: number[]): number {
	let start = 0;
	let end = nums.length - 1;
	while (start < end) {
		let mid = start + Math.trunc((end - start) / 2);
		if (nums[mid] === nums[mid + 1]) mid++;
		const numbersCount = mid - start + 1;
		if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
			return nums[mid];
		}
		if (numbersCount % 2 === 0) {
			start = mid + 1;
		} else {
			end = mid - 2;
		}
	}
	return nums[start];
}
