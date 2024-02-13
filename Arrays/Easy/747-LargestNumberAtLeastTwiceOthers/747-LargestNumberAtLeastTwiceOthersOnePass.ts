/**
 * Easy
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */
function dominantIndex(nums: number[]): number {
	/**
	 * We need to find the index of the largest number in the array,
	 * such that it is at least twice as much as every other number.
	 * The largest number is guaranteed to be unique.
	 * We can find the two largest numbers,
	 * and save the index of the largest one.
	 */
	let max = 0;
	let secondMax = 0;
	let maxIndex = 0;
	for (const [i, num] of nums.entries()) {
		if (num > max) {
			secondMax = max;
			max = num;
			maxIndex = i;
		} else if (num > secondMax) {
			secondMax = num;
		}
	}
	/**
	 * If the largest number is at least twice as much as
	 * the second largest number, Then it also must be at least
	 * twice as much as every other number.
	 */
	return max >= secondMax * 2 ? maxIndex : -1;
}
