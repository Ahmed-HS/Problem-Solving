/**
 * Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(numbers: number[]): number {
	// Initialize the maximum length of Longest Increasing Subsequence (LIS) as 1.
	let maxLISLength = 1;

	/**
	 * Create an array where maxLISUntil[i] will store the length of the
	 * longest increasing subsequence that ends with the number at index i.
	 */
	const maxLISUntil = new Array(numbers.length).fill(1);

	// Iterate through each element in the numbers array.
	for (let end = 0; end < numbers.length; end++) {
		// For each element at index 'end', check all previous elements from index 0 to end-1.
		for (let current = 0; current < end; current++) {
			/**
			 * If the number at index 'end' is greater than the number at index 'current',
			 * it means we can append the number at index 'end' to the increasing subsequence
			 * that ends at index 'current' to form a new increasing subsequence.
			 */
			if (numbers[end] > numbers[current]) {
				/**
				 * Update the maxLISUntil[end] to the maximum of its current value and
				 * maxLISUntil[current] + 1 (the length of the subsequence ending at 'current' plus the current number at end).
				 */
				maxLISUntil[end] = Math.max(
					maxLISUntil[end],
					maxLISUntil[current] + 1
				);
			}
		}

		// Update the maxLISLength to the maximum value found so far.
		maxLISLength = Math.max(maxLISLength, maxLISUntil[end]);
	}

	// Return the length of the longest increasing subsequence found.
	return maxLISLength;
}
