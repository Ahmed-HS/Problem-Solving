/**
 * Medium
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
function findDuplicate(numbers: number[]): number {
	/**
	 * The length of the numbers array is n.
	 * The numbers are in the range of 1 to n - 1.
	 * We can use binary search on the range of numbers.
	 * We count the numbers that are less than or equal to the mid.
	 * If the count is less than or equal to the mid,
	 * then the duplicate number is in the right half.
	 * Otherwise, the duplicate number is in the left half.
	 * When the search range is narrowed down to one number,
	 * that number is the duplicate number.
	 */
	let start = 1;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		let count = 0;
		for (const number of numbers) {
			if (number <= mid) {
				count++;
			}
		}
		/**
		 * If the count is less than or equal to the mid,
		 * mid and the numbers before it are all unique.
		 * The duplicate number is in the right half.
		 */
		if (count <= mid) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return start;
}
