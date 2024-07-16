/**
 * Medium
 * https://leetcode.com/problems/longest-common-subsequence/
 */
function longestCommonSubsequence(text1: string, text2: string): number {
	const maxSubsequenceLength = Array.from({ length: text1.length + 1 }, () =>
		new Array(text2.length + 1).fill(undefined)
	);
	function longestCommonSubsequence(length1: number, length2: number) {
		if (length1 === 0 || length2 === 0) return 0;
		if (maxSubsequenceLength[length1][length2] !== undefined) {
			return maxSubsequenceLength[length1][length2];
		}
		if (text1[length1 - 1] === text2[length2 - 1]) {
			maxSubsequenceLength[length1][length2] =
				1 + longestCommonSubsequence(length1 - 1, length2 - 1);
			return maxSubsequenceLength[length1][length2];
		}
		const skipText1 = longestCommonSubsequence(length1 - 1, length2);
		const skipText2 = longestCommonSubsequence(length1, length2 - 1);
		maxSubsequenceLength[length1][length2] = Math.max(skipText1, skipText2);
		return maxSubsequenceLength[length1][length2];
	}
	return longestCommonSubsequence(text1.length, text2.length);
}
