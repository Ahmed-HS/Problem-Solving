/**
 * Easy
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
function reverseWords(s: string): string {
	let words = s.split(" ");
	words = words.map((word) => [...word].reverse().join(""));
	return words.join(" ");
}
