/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return shellSort(numbers);
}

function shellSort(numbers: number[]): number[] {
	let interval = Math.trunc(numbers.length / 2);
	while (interval > 0) {
		for (let i = interval; i < numbers.length; i++) {
			let newNumber = i;
			while (
				newNumber >= interval &&
				numbers[newNumber] < numbers[newNumber - interval]
			) {
				swap(newNumber, newNumber - interval, numbers);
				newNumber -= interval;
			}
		}
		interval = Math.trunc(interval / 2);
	}
	return numbers;
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
