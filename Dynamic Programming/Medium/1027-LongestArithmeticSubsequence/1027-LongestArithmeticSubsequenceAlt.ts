/**
 * Medium
 * https://leetcode.com/problems/longest-arithmetic-subsequence/
 */
function longestArithSeqLength(numbers: number[]): number {
	let maxLength = 1;
	for (let difference = 0; difference <= 500; difference++) {
		// Create a map to store the maximum subsequence length ending at each number.
		const increasingSubsequenceUntil = new Map<number, number>();
		const decreasingSubsequenceUntil = new Map<number, number>();

		for (const number of numbers) {
			/**
			 * If the difference between the current number and the target number
			 * is present in the map, then the maximum subsequence length ending at
			 * the target number can be extended by 1 to include the current number.
			 * Otherwise, the maximum subsequence length ending at the current number is 1.
			 */
			const increasingTarget =
				increasingSubsequenceUntil.get(number - difference) ?? -1;
			const decreasingTarget =
				decreasingSubsequenceUntil.get(number + difference) ?? -1;
			increasingSubsequenceUntil.set(
				number,
				Math.max(1, increasingTarget + 1)
			);
			decreasingSubsequenceUntil.set(
				number,
				Math.max(1, decreasingTarget + 1)
			);
			// Update the maximum subsequence length found so far.
			maxLength = Math.max(
				maxLength,
				increasingSubsequenceUntil.get(number),
				decreasingSubsequenceUntil.get(number)
			);
		}
	}
	return maxLength;
}
