/**
 * Medium
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
function search(numbers: number[], target: number): number {
	const pivot = findMinimum(numbers);
	return (
		binarySearch(0, pivot - 1, target, numbers) ??
		binarySearch(pivot, numbers.length - 1, target, numbers) ??
		-1
	);
}

function findMinimum(numbers: number[]) {
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
	return start;
}

function binarySearch(
	start: number,
	end: number,
	target: number,
	numbers: number[]
): number | null {
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] === target) {
			return mid;
		}
		if (numbers[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return null;
}
