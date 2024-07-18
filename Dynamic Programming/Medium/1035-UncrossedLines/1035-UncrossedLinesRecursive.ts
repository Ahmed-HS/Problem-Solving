/**
 * Medium
 * https://leetcode.com/problems/uncrossed-lines/
 */
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
	const maxSubsequenceLength = Array.from({ length: nums1.length + 1 }, () =>
		new Array(nums2.length + 1).fill(undefined)
	);
	function longestCommonSubsequence(length1: number, length2: number) {
		if (length1 === 0 || length2 === 0) return 0;
		if (maxSubsequenceLength[length1][length2] !== undefined) {
			return maxSubsequenceLength[length1][length2];
		}
		if (nums1[length1 - 1] === nums2[length2 - 1]) {
			maxSubsequenceLength[length1][length2] =
				1 + longestCommonSubsequence(length1 - 1, length2 - 1);
			return maxSubsequenceLength[length1][length2];
		}
		const skipNums1 = longestCommonSubsequence(length1 - 1, length2);
		const skipNums2 = longestCommonSubsequence(length1, length2 - 1);
		maxSubsequenceLength[length1][length2] = Math.max(skipNums1, skipNums2);
		return maxSubsequenceLength[length1][length2];
	}
	return longestCommonSubsequence(nums1.length, nums2.length);
}
