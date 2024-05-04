/**
 * Easy
 * https://leetcode.com/problems/contains-duplicate/
 */
function containsDuplicate(nums: number[]): boolean {
	const unique = new Set(nums);
	return unique.size < nums.length;
}
