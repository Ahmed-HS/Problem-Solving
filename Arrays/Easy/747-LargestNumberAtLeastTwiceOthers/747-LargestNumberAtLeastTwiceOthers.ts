/**
 * Easy
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */
function dominantIndex(nums: number[]): number {
	/**
	 * We need to find the index of the largest number in the array,
	 * such that it is at least twice as much as every other number.
	 * The largest number is guaranteed to be unique.
	 * First, we find the index of the largest number.
	 */
	let max = 0;
	let maxIndex = 0;
	for (const [i, num] of nums.entries()) {
		if (num > max) {
			max = num;
			maxIndex = i;
		}
	}
	/**
	 * Then, we check if the largest number
	 * is at least twice as much as every other number,
	 * not including itself.
	 */
	for (const [i, num] of nums.entries()) {
		if (i !== maxIndex && max < num * 2) {
			return -1;
		}
	}
	return maxIndex;
}
