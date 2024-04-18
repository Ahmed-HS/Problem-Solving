/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return bubbleSort(numbers);
}

function bubbleSort(numbers: number[]): number[] {
	for (let i = 0; i < numbers.length - 1; i++) {
		let isSorted = true;
		for (let j = 0; j < numbers.length - i - 1; j++) {
			if (numbers[j] > numbers[j + 1]) {
				swap(j, j + 1, numbers);
				isSorted = false;
			}
		}
		if (isSorted) return numbers;
	}
	return numbers;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
