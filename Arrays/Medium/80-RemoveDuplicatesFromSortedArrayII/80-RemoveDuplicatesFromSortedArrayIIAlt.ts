/**
 * Medium
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */
function removeDuplicates(nums: number[]): number {
	if (nums.length <= 2) return nums.length;
	const allowedDuplicates = 2;
	let uniqueIndex = 1;
	let duplicatecount = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			duplicatecount++;
		} else {
			duplicatecount = 1;
		}
		if (duplicatecount <= allowedDuplicates) {
			nums[uniqueIndex] = nums[i];
			uniqueIndex++;
		}
	}
	return uniqueIndex;
}
