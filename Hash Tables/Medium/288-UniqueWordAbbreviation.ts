/**
 * Medium
 * https://leetcode.com/problems/unique-word-abbreviation/
 */
const abbreviations = new Map<string, Set<string>>();

function initializeValidWordAbbr(dictionary: string[]): void {
	for (const word of dictionary) {
		const abbreviation = getAbbreviation(word);
		if (!abbreviations[abbreviation]) {
			abbreviations[abbreviation] = new Set<string>();
		}
		abbreviations[abbreviation].add(word);
	}
}

function isUnique(word: string): boolean {
	const abbreviation = getAbbreviation(word);
	const sameAbbreviations = abbreviations[abbreviation];
	if (!sameAbbreviations) return true;
	return sameAbbreviations.size === 1 && sameAbbreviations.has(word);
}

function getAbbreviation(word: string): string {
	const length = word.length;
	if (length < 3) return word;
	return word.charAt(0) + (length - 2).toString() + word.charAt(length - 1);
}
