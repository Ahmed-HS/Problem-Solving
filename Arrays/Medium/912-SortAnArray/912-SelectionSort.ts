/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return selectionSort(numbers);
}

function selectionSort(numbers: number[]): number[] {
	for (let i = 0; i < numbers.length - 1; i++) {
		let maxIndex = 0;
		for (let j = 0; j < numbers.length - i; j++) {
			if (numbers[j] > numbers[maxIndex]) {
				maxIndex = j;
			}
		}
		swap(maxIndex, numbers.length - i - 1, numbers);
	}
	return numbers;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
