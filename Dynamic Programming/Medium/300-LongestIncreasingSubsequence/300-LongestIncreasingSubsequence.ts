/**
 * Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(numbers: number[]): number {
	// Initialize the maximum length of Longest Increasing Subsequence (LIS) as 1.
	let maxLISLength = 1;

	/**
	 * Create an array where LISLength[i] will store the length of the
	 * longest increasing subsequence that ends with the number at index i.
	 */
	const LISLength = new Array(numbers.length).fill(1);

	// Iterate through each element in the numbers array.
	for (let i = 0; i < numbers.length; i++) {
		// For each element at index 'i', check all previous elements from index 0 to i-1.
		for (let j = 0; j < i; j++) {
			/**
			 * If the number at index 'i' is greater than the number at index 'j',
			 * it means we can append the number at index 'i' to the increasing subsequence
			 * that ends at index 'j' to form a new increasing subsequence.
			 */
			if (numbers[i] > numbers[j]) {
				/**
				 * Update the LISLength[i] to the maximum of its current value and
				 * LISLength[j] + 1 (the length of the subsequence ending at 'j' plus the current number at i).
				 */
				LISLength[i] = Math.max(LISLength[i], LISLength[j] + 1);

				// Update the maxLISLength to the maximum value found so far.
				maxLISLength = Math.max(maxLISLength, LISLength[i]);
			}
		}
	}

	// Return the length of the longest increasing subsequence found.
	return maxLISLength;
}
