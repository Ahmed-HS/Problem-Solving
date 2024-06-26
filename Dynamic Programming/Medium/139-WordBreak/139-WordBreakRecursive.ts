/**
 * Medium
 * https://leetcode.com/problems/word-break/
 */
function wordBreak(word: string, wordDict: string[]): boolean {
	const dictionary = new Set(wordDict);
	const canCreateWithLength: boolean[] = new Array(word.length).fill(
		undefined
	);
	function canCreateWord(length: number) {
		if (length === 0) return true;
		if (canCreateWithLength[length] !== undefined)
			return canCreateWithLength[length];
		for (let start = 0; start < length; start++) {
			const substring = word.slice(start, length);
			if (dictionary.has(substring) && canCreateWord(start)) {
				canCreateWithLength[length] = true;
				return true;
			}
		}
		canCreateWithLength[length] = false;
		return false;
	}
	return canCreateWord(word.length);
}
