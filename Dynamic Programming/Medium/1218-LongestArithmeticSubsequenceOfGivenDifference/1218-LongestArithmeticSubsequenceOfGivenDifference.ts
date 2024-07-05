/**
 * Medium
 * https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
 */
function longestSubsequence(numbers: number[], difference: number): number {
	// Create a map to store the maximum subsequence length ending at each number.
	const maxSubsequenceUntil = new Map<number, number>();
	let maxLength = 1;
	for (const number of numbers) {
		/**
		 * If the difference between the current number and the target number
		 * is present in the map, then the maximum subsequence length ending at
		 * the target number can be extended by 1 to include the current number.
		 * Otherwise, the maximum subsequence length ending at the current number is 1.
		 */
		const target = number - difference;
		const targetLength = maxSubsequenceUntil.get(target);
		if (targetLength !== undefined) {
			maxSubsequenceUntil.set(number, targetLength + 1);
		} else {
			maxSubsequenceUntil.set(number, 1);
		}
		// Update the maximum subsequence length found so far.
		maxLength = Math.max(maxLength, maxSubsequenceUntil.get(number));
	}
	return maxLength;
}
