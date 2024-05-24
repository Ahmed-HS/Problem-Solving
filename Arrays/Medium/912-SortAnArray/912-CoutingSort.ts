/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return countingSort(numbers);
}

function countingSort(numbers: number[]): number[] {
	let min = Infinity;
	let max = -Infinity;
	for (const number of numbers) {
		min = Math.min(min, number);
		max = Math.max(max, number);
	}
	// Create an array to store the count of each number.
	const endIndex = new Array(max - min + 1).fill(0);
	for (const number of numbers) {
		endIndex[number - min]++;
	}
	// End index now contains the number of elements less than or equal to the index.
	for (let i = 1; i < endIndex.length; i++) {
		endIndex[i] += endIndex[i - 1];
	}
	const sortedArray = new Array(numbers.length);
	// Start from the end to keep the sorting stable.
	for (let i = numbers.length - 1; i >= 0; i--) {
		const correctIndex = endIndex[numbers[i] - min] - 1;
		sortedArray[correctIndex] = numbers[i];
		endIndex[numbers[i] - min]--;
	}
	return sortedArray;
}
