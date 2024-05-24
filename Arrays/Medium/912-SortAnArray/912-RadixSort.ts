/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return radixSort(numbers);
}

function radixSort(numbers: number[]): number[] {
	const min = Math.min(...numbers);
	for (let i = 0; i < numbers.length; i++) {
		numbers[i] -= min;
	}
	const max = Math.max(...numbers);
	let placeValue = 1;
	while (Math.trunc(max / placeValue) > 0) {
		countingSort(numbers, placeValue);
		placeValue *= 10;
	}
	for (let i = 0; i < numbers.length; i++) {
		numbers[i] += min;
	}
	return numbers;
}

function countingSort(numbers: number[], placeValue: number) {
	// Create an array to store the count of each digit.
	const endIndex = new Array(10).fill(0);
	for (const number of numbers) {
		const digit = Math.trunc(number / placeValue) % 10;
		endIndex[digit]++;
	}
	// End index now contains the number of elements with a digit less than or equal to the index.
	for (let i = 1; i < endIndex.length; i++) {
		endIndex[i] += endIndex[i - 1];
	}
	const sortedArray = new Array(numbers.length);
	// Start from the end to keep the sorting stable.
	for (let i = numbers.length - 1; i >= 0; i--) {
		const digit = Math.trunc(numbers[i] / placeValue) % 10;
		const correctIndex = endIndex[digit] - 1;
		sortedArray[correctIndex] = numbers[i];
		endIndex[digit]--;
	}
	for (let i = 0; i < numbers.length; i++) {
		numbers[i] = sortedArray[i];
	}
}
