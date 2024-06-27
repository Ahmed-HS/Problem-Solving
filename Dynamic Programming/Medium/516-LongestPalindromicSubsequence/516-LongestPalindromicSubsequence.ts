/**
 * Medium
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 */
function longestPalindromeSubseq(word: string): number {
	const palindromeFromUntil = Array.from({ length: word.length }, () =>
		new Array(word.length).fill(0)
	);
	for (let start = word.length - 1; start >= 0; start--) {
		palindromeFromUntil[start][start] = 1;
		for (let end = start + 1; end < word.length; end++) {
			if (word[start] === word[end]) {
				palindromeFromUntil[start][end] =
					2 + palindromeFromUntil[start + 1][end - 1];
			} else {
				palindromeFromUntil[start][end] = Math.max(
					palindromeFromUntil[start + 1][end],
					palindromeFromUntil[start][end - 1]
				);
			}
		}
	}
	return palindromeFromUntil[0][word.length - 1];
}
