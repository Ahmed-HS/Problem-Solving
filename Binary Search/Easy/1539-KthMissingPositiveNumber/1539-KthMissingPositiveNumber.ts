/**
 * Easy
 * https://leetcode.com/problems/kth-missing-positive-number/
 */
function findKthPositive(array: number[], k: number): number {
	/**
	 * The array is sorted in ascending order.
	 * So first we can asume that the kth missing number is k.
	 * For example if K is 5, we assume that the numbers
	 * 1, 2, 3, 4, 5 are missing, so the 5th missing number is 5.
	 * If the array has a number less than or equal to 5,
	 * it means that it is not missing, so we increment k
	 * to keep it as the kth missing number.
	 * If we reach a number greater than 5, we break the loop.
	 */
	let kthMissing = k;
	for (const number of array) {
		if (number <= kthMissing) {
			kthMissing++;
		} else {
			break;
		}
	}
	return kthMissing;
}
