/**
 * Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(numbers: number[]): number {
	const subsequenceTails = new Array(numbers.length);
	let maxSubsequenceLength = 0;
	for (const number of numbers) {
		/**
		 * Find the first number in the subsequence that is greater
		 * than or equal to the current number. Replace that number with the
		 * current number to make a subsequence ending with the current number.
		 */
		const insertionIndex = firstOccurrence(
			number,
			maxSubsequenceLength,
			subsequenceTails
		);
		subsequenceTails[insertionIndex] = number;
		if (insertionIndex === maxSubsequenceLength) maxSubsequenceLength++;
	}
	return maxSubsequenceLength;
}

function firstOccurrence(
	target: number,
	end: number,
	numbers: number[]
): number {
	let start = 0;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
