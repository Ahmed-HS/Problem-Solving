/**
 * Medium
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 */
function longestPalindromeSubseq(word: string): number {
	const palindromeFromUntil = Array.from({ length: word.length }, () =>
		new Array(word.length).fill(undefined)
	);
	function palindromicSubsequence(start: number, end: number) {
		if (start > end) return 0;
		if (start === end) return 1;
		if (palindromeFromUntil[start][end] !== undefined) {
			return palindromeFromUntil[start][end];
		}
		if (word[start] === word[end]) {
			palindromeFromUntil[start][end] =
				2 + palindromicSubsequence(start + 1, end - 1);
		} else {
			palindromeFromUntil[start][end] = Math.max(
				palindromicSubsequence(start + 1, end),
				palindromicSubsequence(start, end - 1)
			);
		}
		return palindromeFromUntil[start][end];
	}
	return palindromicSubsequence(0, word.length - 1);
}
