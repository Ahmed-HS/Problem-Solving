/**
 * Medium
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */
function search(numbers: number[], target: number): boolean {
	let start = 0;
	let end = numbers.length - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (target === numbers[mid]) {
			return true;
		}
		/**
		 * If the start, mid, and end elements are the same,
		 * we can't determine which side is sorted.
		 * So, we move the start and end pointers to the next elements,
		 * as we know that the mid element is not the target.
		 */
		if (numbers[start] === numbers[mid] && numbers[end] === numbers[mid]) {
			start++;
			end--;
			/**
			 * If the mid element is greater than or equal to the start element,
			 * then the left side is sorted.
			 */
		} else if (numbers[mid] >= numbers[start]) {
			/**
			 * If the target is between the start and mid elements,
			 * then the target is on the left side.
			 * So, we move the end pointer to mid - 1.
			 * Otherwise, we move the start pointer to mid + 1.
			 */
			if (target >= numbers[start] && target < numbers[mid]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else {
			/**
			 * If the target is between the mid and end elements,
			 * then the target is on the right side.
			 * So, we move the start pointer to mid + 1.
			 * Otherwise, we move the end pointer to mid - 1.
			 */
			if (target > numbers[mid] && target <= numbers[end]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
	}
	return false;
}
