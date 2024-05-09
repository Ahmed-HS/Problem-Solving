/**
 * Medium
 * https://leetcode.com/problems/find-peak-element/
 */
function findPeakElement(numbers: number[]): number {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		const value = numbers[mid];
		const left = numbers[mid - 1] ?? -Infinity;
		const right = numbers[mid + 1] ?? -Infinity;
		if (value > left && value > right) {
			return mid;
		}
		if (right > value) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return start;
}
