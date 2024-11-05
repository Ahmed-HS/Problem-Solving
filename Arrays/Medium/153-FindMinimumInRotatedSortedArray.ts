/**
 * Medium
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
function findMin(numbers: number[]): number {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		/**
		 * If the middle element is less than the end element,
		 * then the minimum element is either the middle element or
		 * to the left of it, So we update the end to mid to exclude
		 * the right half.
		 * Else, the minimum element is to the right of the middle element,
		 * So we update the start to mid + 1 to exclude the left half.
		 */
		if (numbers[mid] <= numbers[end]) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return numbers[start];
}
