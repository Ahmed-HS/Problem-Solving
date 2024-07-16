/**
 * Medium
 * https://leetcode.com/problems/longest-common-subsequence/
 */
function longestCommonSubsequence(text1: string, text2: string): number {
	const maxSubsequenceLength = new Array(text2.length + 1).fill(0);
	for (let length1 = 1; length1 <= text1.length; length1++) {
		let upperLeft = 0;
		for (let length2 = 1; length2 <= text2.length; length2++) {
			const previous = maxSubsequenceLength[length2];
			if (text1[length1 - 1] === text2[length2 - 1]) {
				maxSubsequenceLength[length2] = 1 + upperLeft;
			} else {
				const skipText1 = maxSubsequenceLength[length2];
				const skipText2 = maxSubsequenceLength[length2 - 1];
				maxSubsequenceLength[length2] = Math.max(skipText1, skipText2);
			}
			upperLeft = previous;
		}
	}
	return maxSubsequenceLength[text2.length];
}
