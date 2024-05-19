/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return selectionSort(numbers);
}

function selectionSort(numbers: number[]): number[] {
	for (let i = 0; i < numbers.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[j] < numbers[minIndex]) {
				minIndex = j;
			}
		}
		swap(minIndex, i, numbers);
	}
	return numbers;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
