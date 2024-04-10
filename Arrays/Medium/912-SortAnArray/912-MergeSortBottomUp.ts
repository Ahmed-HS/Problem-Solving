/**
 * Medium
 * https://leetcode.com/problems/sort-an-array/
 */
function sortArray(numbers: number[]): number[] {
	return mergeSort(numbers);
}

function mergeSort(numbers: number[]): number[] {
	/**
	 * Start merging subarrays of size 1 and then merge
	 * subarrays of size 2, 4, 8, 16, and so on until the entire array is sorted.
	 */
	for (let size = 1; size < numbers.length; size *= 2) {
		/**
		 * Merge each pair of subarrays of length 'size'
		 * after each iteration increment the start by 2 * size
		 * which is the length of the two subarrays, so that we can merge
		 * the next pair of subarrays.
		 * The stop condition is when the start is less than the length of the array
		 * minus the size because we need to have at least one subarray of length 'size'
		 * the other subarray can have only one element if the length of the array is odd.
		 */
		for (let start = 0; start < numbers.length - size; start += 2 * size) {
			// The midpoint is the start plus the size of the subarray minus 1 (0 based index)
			const midpoint = start + size - 1;
			/**
			 * The end is the start plus the length of the two subarrays minus 1 (0 based index)
			 * or the the last index of the array if the length of the array is odd.
			 * So the first subarray is from start to midpoint and the second subarray is from
			 * midpoint + 1 to end. if the length of the array is odd, the second subarray will
			 * only have one element in the final iteration.
			 */
			const end = Math.min(start + 2 * size - 1, numbers.length - 1);
			merge(start, midpoint, end, numbers);
		}
	}
	return numbers;
}

function merge(
	start: number,
	midpoint: number,
	end: number,
	numbers: number[]
) {
	const length = end - start + 1;
	const sorted = new Array(length);
	let left = start;
	let right = midpoint + 1;
	let write = 0;
	while (left <= midpoint && right <= end) {
		sorted[write++] =
			numbers[left] < numbers[right] ? numbers[left++] : numbers[right++];
	}
	while (left <= midpoint) {
		sorted[write++] = numbers[left++];
	}
	while (right <= end) {
		sorted[write++] = numbers[right++];
	}
	for (let i = 0; i < length; i++) {
		numbers[start + i] = sorted[i];
	}
}
