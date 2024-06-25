/**
 * Medium
 * https://leetcode.com/problems/longest-palindromic-substring/
 */
function longestPalindrome(word: string): string {
	function expandAroundCenter(start: number, end: number): [number, number] {
		while (start >= 0 && end < word.length && word[start] === word[end]) {
			start--;
			end++;
		}
		return [start + 1, end - 1];
	}

	let longestPalindrome: [number, number] = [0, 0];
	for (let i = 0; i < word.length; i++) {
		const oddBounds = expandAroundCenter(i, i);
		const evenBounds = expandAroundCenter(i, i + 1);

		const oddLength = oddBounds[1] - oddBounds[0] + 1;
		const evenLength = evenBounds[1] - evenBounds[0] + 1;

		if (oddLength > longestPalindrome[1] - longestPalindrome[0] + 1) {
			longestPalindrome = oddBounds;
		}
		if (evenLength > longestPalindrome[1] - longestPalindrome[0] + 1) {
			longestPalindrome = evenBounds;
		}
	}

	return word.slice(longestPalindrome[0], longestPalindrome[1] + 1);
}
