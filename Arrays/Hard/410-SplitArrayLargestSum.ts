/**
 * Hard
 * https://leetcode.com/problems/split-array-largest-sum/
 */
function splitArray(numbers: number[], k: number): number {
	/**
	 * Given an integer array numbers and an integer k,
	 * split numbers into k non-empty subarrays such
	 * that the largest sum of any subarray is minimized.
	 * Return the minimized largest sum of the split.
	 */
	let sum = 0;
	let max = 0;
	for (const number of numbers) {
		sum += number;
		max = Math.max(max, number);
	}
	// When k is equal to the length of the numbers array, the largest sum is the largest number
	let start = max;
	// When k is equal to 1, the largest sum is the sum of all numbers
	let end = sum;

	// Binary search between the smallest and largest possible values.
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		const maxSum = mid;
		/**
		 * Check if it's possible to split the array into k or
		 * fewer subarrays with maxSum as the maximum subarray sum.
		 */
		if (canSplit(maxSum, k, numbers)) {
			// If we can split, try for a smaller maximum sum
			end = mid;
		} else {
			// If we cannot split, we need a larger maximum sum
			start = mid + 1;
		}
	}
	// When start equals end, we've found the smallest possible maximum subarray sum.
	return start;
}

function canSplit(maxSum: number, k: number, numbers: number[]): boolean {
	/**
	 * Check if the numbers can be split into k or fewer subarrays
	 * such that the sum of each subarray is less than or equal to maxSum.
	 * If the current sum is greater than maxSum,
	 * then we start a new subarray, and increment the subarray count.
	 * If the subarray count is greater than k, then the numbers cannot be split.
	 * If we can split the array into less than k subarrays
	 * where the sum of each subarray is less than or equal to maxSum,
	 * Then surely we can split the array into k subarrays with the same condition.
	 * Because when the number of subarrays increases, the sum of each subarray will decrease.
	 */
	let sum = 0;
	let subarrayCount = 1;

	for (const number of numbers) {
		sum += number;
		// If adding the current number exceeds maxSum, we need to start a new subarray.
		if (sum > maxSum) {
			sum = number; // Start new subarray with the current number.
			subarrayCount++; // Increment the subarray count.
			// If the number of subarrays exceeds k, return false.
			if (subarrayCount > k) return false;
		}
	}
	// If we can split the array into k or fewer subarrays, return true.
	return true;
}
