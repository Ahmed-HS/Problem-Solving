/**
 * Medium
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
 */
function findNumberOfLIS(numbers: number[]): number {
	/**
	 * Create an array where LISLength[i] will store the length of the
	 * longest increasing subsequence that ends with the number at index i.
	 */
	const maxLISLength = new Array(numbers.length).fill(1);
	const maxLISCount = new Array(numbers.length).fill(1);
	let maxLength = 1;
	let maxCount = 0;
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
				if (maxLISLength[i] < maxLISLength[j] + 1) {
					maxLISLength[i] = maxLISLength[j] + 1;
					maxLISCount[i] = maxLISCount[j];
				} else if (maxLISLength[i] === maxLength) {
					maxLISCount[i] += maxLISCount[j];
				}
			}
		}
		if (maxLISLength[i] > maxLength) {
			maxLength = maxLISLength[i];
			maxCount = maxLISCount[i];
		} else if (maxLISLength[i] === maxLength) {
			maxCount += maxLISCount[i];
		}
	}
	// Return the count of the longest increasing subsequence found.
	return maxCount;
}
