/**
 * Medium
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 */
function longestPalindromeSubseq(word: string): number {
	let previousRow = new Array(word.length).fill(0);
	const currentRow = new Array(word.length).fill(0);
	for (let start = word.length - 1; start >= 0; start--) {
		currentRow[start] = 1;
		for (let end = start + 1; end < word.length; end++) {
			if (word[start] === word[end]) {
				currentRow[end] = 2 + previousRow[end - 1];
			} else {
				currentRow[end] = Math.max(
					previousRow[end],
					currentRow[end - 1]
				);
			}
		}
		previousRow = [...currentRow];
		currentRow.fill(0);
	}
	return previousRow[word.length - 1];
}
