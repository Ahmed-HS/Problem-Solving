/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return quickSort(0, numbers.length - 1, numbers);
}

function quickSort(start: number, end: number, numbers: number[]) {
	if (start >= end) {
		return numbers;
	}
	const pivot = partition(start, end, numbers);
	quickSort(start, pivot - 1, numbers);
	quickSort(pivot + 1, end, numbers);
	return numbers;
}

function partition(start: number, end: number, numbers: number[]): number {
	const randomIndex = Math.trunc(Math.random() * (end - start + 1)) + start;
	swap(start, randomIndex, numbers);
	const pivot = numbers[start];
	let greaterThanPivot = start + 1;
	for (let i = greaterThanPivot; i <= end; i++) {
		if (numbers[i] < pivot) {
			swap(i, greaterThanPivot, numbers);
			greaterThanPivot++;
		}
	}
	swap(start, greaterThanPivot - 1, numbers);
	return greaterThanPivot - 1;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
