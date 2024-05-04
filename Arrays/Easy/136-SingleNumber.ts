/**
 * Easy
 * https://leetcode.com/problems/single-number/
 */
function singleNumber(nums: number[]): number {
	let unique = 0;
	for (const number of nums) {
		unique ^= number;
	}
	return unique;
}
