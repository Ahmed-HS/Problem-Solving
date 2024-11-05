/**
 * Hard
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 */
function findMin(numbers: number[]): number {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		/**
		 * If the rotated sorted array contains duplicates, we can't
		 * determine which half to exclude based on comparing the middle
		 * element with the end element.
		 * For example, [1, 3, 3] and [3, 3, 3, 1, 3] are valid
		 * rotated sorted arrays, and the minimum element is 1.
		 * In the first example, the middle element is 3, and the minimum
		 * element is to the left of it. In the second example, the middle
		 * element is 3, and the minimum element is to the right of it.
		 * So, If the middle element is equal to the end element, we can
		 * exclude the end element and continue the search.
		 * Then if the middle element is less than the end element,
		 * then the minimum element is either the middle element or
		 * to the left of it, So we update the end to mid to exclude
		 * the right half.
		 * Else, the minimum element is to the right of the middle element,
		 * So we update the start to mid + 1 to exclude the left half.
		 */
		if (numbers[end] === numbers[mid]) {
			end--;
		} else if (numbers[mid] < numbers[end]) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return numbers[start];
}
