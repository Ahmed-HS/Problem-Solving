/**
 * Easy
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
function firstUniqChar(s: string): number {
	const frequency = new Map();
	for (const letter of s) {
		const letterFrequency = frequency.get(letter) ?? 0;
		frequency.set(letter, letterFrequency + 1);
	}
	for (let i = 0; i < s.length; i++) {
		if (frequency.get(s[i]) === 1) return i;
	}
	return -1;
}
