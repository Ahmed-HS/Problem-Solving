/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return insertionSort(numbers);
}

function insertionSort(numbers: number[]): number[] {
	for (let i = 1; i < numbers.length; i++) {
		let newNumber = i;
		while (newNumber > 0 && numbers[newNumber] < numbers[newNumber - 1]) {
			swap(newNumber, newNumber - 1, numbers);
			newNumber--;
		}
	}
	return numbers;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
