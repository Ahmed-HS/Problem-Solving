/**
 * Medium
 * https://leetcode.com/problems/query-kth-smallest-trimmed-number/
 */
function smallestTrimmedNumbers(
	numbers: string[],
	queries: number[][]
): number[] {
	const result = [];
	const sortCache = new Map<number, number[]>();
	for (const [k, trim] of queries) {
		let sorted = sortCache.get(trim);
		if (!sorted) {
			sorted = radixSort(trim, numbers);
			sortCache.set(trim, sorted);
		}
		const targetIndex = sorted[k - 1];
		result.push(targetIndex);
	}
	return result;
}
function radixSort(digitLength: number, numbers: string[]): number[] {
	let sortedIndexes = [...numbers.keys()];
	let digitIndex = numbers[0].length - 1;
	while (digitLength > 0) {
		sortedIndexes = countingSort(digitIndex, sortedIndexes, numbers);
		digitIndex--;
		digitLength--;
	}
	return sortedIndexes;
}

function countingSort(
	digitIndex: number,
	sortedIndexes: number[],
	numbers: string[]
) {
	// Create an array to store the count of each digit.
	const endIndex = new Array(10).fill(0);
	for (const number of numbers) {
		const digit = +number[digitIndex];
		endIndex[digit]++;
	}
	// End index now contains the number of elements with a digit less than or equal to the index.
	for (let i = 1; i < endIndex.length; i++) {
		endIndex[i] += endIndex[i - 1];
	}
	const sortedArray = new Array(numbers.length);
	// Start from the end to keep the sorting stable.
	for (let i = numbers.length - 1; i >= 0; i--) {
		const digit = +numbers[sortedIndexes[i]][digitIndex];
		const correctIndex = endIndex[digit] - 1;
		sortedArray[correctIndex] = sortedIndexes[i];
		endIndex[digit]--;
	}
	return sortedArray;
}
