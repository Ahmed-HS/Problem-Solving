/**
 * Medium
 * https://leetcode.com/problems/longest-arithmetic-subsequence/
 */
function longestArithSeqLength(numbers: number[]): number {
	let maxLength = 1;
	const maxSubsequenceUntil: Array<Map<number, number>> = Array.from(
		{ length: numbers.length },
		() => new Map()
	);

	for (let end = 1; end < numbers.length; end++) {
		for (let current = 0; current < end; current++) {
			const difference = numbers[end] - numbers[current];
			const length =
				(maxSubsequenceUntil[current].get(difference) ?? 1) + 1;
			maxSubsequenceUntil[end].set(difference, length);
			maxLength = Math.max(maxLength, length);
		}
	}

	return maxLength;
}
