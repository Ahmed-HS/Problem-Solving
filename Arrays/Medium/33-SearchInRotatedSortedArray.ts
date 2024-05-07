/**
 * Medium
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
function search(numbers: number[], target: number): number {
	const pivot = findPivot(numbers);
	return (
		binarySearch(0, pivot - 1, target, numbers) ??
		binarySearch(pivot, numbers.length - 1, target, numbers) ??
		-1
	);
}

function findPivot(numbers: number[]) {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] > numbers[end]) {
			start = mid + 1;
		} else {
			end = mid;
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
