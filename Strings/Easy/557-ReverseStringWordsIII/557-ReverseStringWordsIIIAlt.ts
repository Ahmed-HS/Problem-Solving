/**
 * Easy
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
function reverseWords(s: string): string {
	const words = [...s];
	let start = 0;
	for (let i = 0; i <= words.length; i++) {
		if (words[i] === " " || i === words.length) {
			let end = i - 1;
			while (start < end) {
				[words[start], words[end]] = [words[end], words[start]];
				start++;
				end--;
			}
			start = i + 1;
		}
	}
	return words.join("");
}
