/**
 * Medium
 * https://leetcode.com/problems/word-break/
 */
function wordBreak(word: string, wordDict: string[]): boolean {
	const dictionary = new Set(wordDict);
	const canCreateWithLength: boolean[] = new Array(word.length + 1).fill(
		false
	);
	canCreateWithLength[0] = true;
	for (let length = 1; length <= word.length; length++) {
		for (let start = 0; start < length; start++) {
			const substring = word.slice(start, length);
			if (canCreateWithLength[start] && dictionary.has(substring)) {
				canCreateWithLength[length] = true;
				break;
			}
		}
	}
	return canCreateWithLength[word.length];
}
