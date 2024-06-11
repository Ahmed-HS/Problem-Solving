/**
 * Easy
 * https://leetcode.com/problems/find-common-characters/
 */
function commonChars(words: string[]): string[] {
	// Create an array to store the minimum count of each letter in all words.
	const minLetterCount = new Array(26).fill(Infinity);
	const commonLetters = [];
	const aCharCode = "a".charCodeAt(0);
	for (const word of words) {
		// Create an array to store the count of each letter in the current word.
		const wordLetterCount = new Array(26).fill(0);
		for (const letter of word) {
			wordLetterCount[letter.charCodeAt(0) - aCharCode]++;
		}
		// Store the minimum count of each letter in all words.
		for (let i = 0; i < 26; i++) {
			minLetterCount[i] = Math.min(minLetterCount[i], wordLetterCount[i]);
		}
	}
	/**
	 * For each letter, add it to the commonLetters
	 * array the minimum number of times it appears in all words.
	 */
	for (let i = 0; i < 26; i++) {
		for (let j = 0; j < minLetterCount[i]; j++) {
			commonLetters.push(String.fromCharCode(i + aCharCode));
		}
	}

	return commonLetters;
}
