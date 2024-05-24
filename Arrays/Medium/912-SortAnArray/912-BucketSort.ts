/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return bucketSort(numbers);
}

function bucketSort(numbers: number[], bucketSize: number = 5): number[] {
	// Determine minimum and maximum values
	let min = numbers[0];
	let max = numbers[0];
	for (const number of numbers) {
		min = Math.min(min, number);
		max = Math.max(max, number);
	}
	// Calculate how many buckets of size bucketSize are needed to cover the range of values.
	const bucketCount = Math.ceil((max - min + 1) / bucketSize);
	const buckets: number[][] = Array.from({ length: bucketCount }, () => []);
	// Distribute input array values into buckets
	for (const number of numbers) {
		/**
		 * Subtract min to make the range of values start from 0
		 * account for the case where min is negative,
		 * then divide by bucketSize to determine the bucket index.
		 */
		const bucketIndex = Math.trunc((number - min) / bucketSize);
		buckets[bucketIndex].push(number);
	}
	// Sort each bucket and concatenate the result
	numbers.length = 0;
	for (let i = 0; i < buckets.length; i++) {
		if (buckets[i].length > 0) {
			buckets[i].sort((a, b) => a - b);
			numbers.push(...buckets[i]);
		}
	}
	return numbers;
}
