/**
 * Medium
 * https://leetcode.com/problems/longest-common-subsequence/
 */
function longestCommonSubsequence(text1: string, text2: string): number {
	const maxSubsequenceLength = Array.from({ length: text1.length + 1 }, () =>
		new Array(text2.length + 1).fill(0)
	);
	for (let length1 = 1; length1 <= text1.length; length1++) {
		for (let length2 = 1; length2 <= text2.length; length2++) {
			if (text1[length1 - 1] === text2[length2 - 1]) {
				maxSubsequenceLength[length1][length2] =
					1 + maxSubsequenceLength[length1 - 1][length2 - 1];
			} else {
				const skipText1 = maxSubsequenceLength[length1 - 1][length2];
				const skipText2 = maxSubsequenceLength[length1][length2 - 1];
				maxSubsequenceLength[length1][length2] = Math.max(
					skipText1,
					skipText2
				);
			}
		}
	}
	return maxSubsequenceLength[text1.length][text2.length];
}
