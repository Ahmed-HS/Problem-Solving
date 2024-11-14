/**
 * Easy
 * https://leetcode.com/problems/kth-missing-positive-number/
 */
function findKthPositive(array: number[], k: number): number {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		// The number of missing numbers between the start and mid.
		const missingCount = array[mid] - mid - 1;
		/**
		 * If the number of missing elements is greater than or equal to k,
		 * then the kth missing number must be to the left of mid.
		 * Otherwise, it must be to the right of mid.
		 */
		if (missingCount >= k) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return start + k;
}
