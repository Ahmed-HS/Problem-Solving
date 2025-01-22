/**
 * Easy
 * https://leetcode.com/problems/length-of-last-word/
 */
function lengthOfLastWord(s: string): number {
	let length = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === " ") {
			if (length === 0) continue;
			break;
		}
		length++;
	}
	return length;
}
