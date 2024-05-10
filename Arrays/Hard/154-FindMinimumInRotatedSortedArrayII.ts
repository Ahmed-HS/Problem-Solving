/**
 * Hard
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 */
function findMin(numbers: number[]): number {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[end] === numbers[mid]) {
			end--;
		} else if (numbers[mid] > numbers[end]) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return numbers[start];
}
