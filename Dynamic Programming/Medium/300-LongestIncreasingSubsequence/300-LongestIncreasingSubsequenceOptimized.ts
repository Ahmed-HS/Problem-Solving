/**
 * Medium
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(numbers: number[]): number {
	const longestSubsequence = [];
	for (const number of numbers) {
		/**
		 * If the current number is greater than the last number in the
		 * longest subsequence, then it is greater than all the numbers
		 * in the subsequence. So, we can add it to the end of the subsequence.
		 */
		if (
			longestSubsequence.length === 0 ||
			number > longestSubsequence[longestSubsequence.length - 1]
		) {
			longestSubsequence.push(number);
		} else {
			/**
			 * Otherwise, find the first number in the subsequence that is greater
			 * than or equal to the current number. Replace that number with the
			 * current number to make a subsequence ending with the current number.
			 */
			const insertionIndex = firstOccurrence(number, longestSubsequence);
			longestSubsequence[insertionIndex] = number;
		}
	}
	return longestSubsequence.length;
}

function firstOccurrence(target: number, numbers: number[]): number {
	let start = 0;
	let end = numbers.length - 1;
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
