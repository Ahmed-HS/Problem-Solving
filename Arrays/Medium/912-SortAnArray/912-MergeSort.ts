/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return mergeSort(0, numbers.length - 1, numbers);
}

function mergeSort(start: number, end: number, numbers: number[]): number[] {
	if (start === end) {
		return numbers;
	}
	const midpoint = start + Math.trunc((end - start) / 2);
	mergeSort(start, midpoint, numbers);
	mergeSort(midpoint + 1, end, numbers);
	merge(start, midpoint, end, numbers);
	return numbers;
}

function merge(
	start: number,
	midpoint: number,
	end: number,
	numbers: number[]
) {
	const length = end - start + 1;
	const sorted = new Array(length);
	let left = start;
	let right = midpoint + 1;
	let write = 0;
	while (left <= midpoint && right <= end) {
		sorted[write++] =
			numbers[left] < numbers[right] ? numbers[left++] : numbers[right++];
	}
	while (left <= midpoint) {
		sorted[write++] = numbers[left++];
	}
	while (right <= end) {
		sorted[write++] = numbers[right++];
	}
	for (let i = 0; i < length; i++) {
		numbers[start + i] = sorted[i];
	}
}
