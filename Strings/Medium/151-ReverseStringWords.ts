/**
 * Medium
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */
function reverseWords(s: string): string {
	const words = s.trim().split(/\s+/);
	words.reverse();
	return words.join(" ");
}
