/**
 * Medium
 * https://leetcode.com/problems/longest-palindromic-substring/
 */
function longestPalindrome(word: string): string {
	let longestPalindrome = [0, 0];
	const isPalindrome: boolean[][] = Array(word.length)
		.fill(null)
		.map(() => Array(word.length).fill(false));

	for (let end = 0; end < word.length; end++) {
		isPalindrome[end][end] = true;

		for (let start = 0; start < end; start++) {
			if (
				word[start] === word[end] &&
				(end - start <= 2 || isPalindrome[start + 1][end - 1])
			) {
				isPalindrome[start][end] = true;
				const currentLength = end - start + 1;
				const maxLength =
					longestPalindrome[1] - longestPalindrome[0] + 1;
				if (currentLength > maxLength) {
					longestPalindrome = [start, end];
				}
			}
		}
	}

	return word.slice(longestPalindrome[0], longestPalindrome[1] + 1);
}
