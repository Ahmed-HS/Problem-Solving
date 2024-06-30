/**
 * Hard
 * https://leetcode.com/problems/distinct-subsequences/
 */
function numDistinct(word: string, target: string): number {
	const subsequencesCount = Array.from({ length: word.length + 1 }, () =>
		new Array(target.length + 1).fill(undefined)
	);
	function distinctSubsequences(wordLength: number, targetLength: number) {
		if (targetLength === 0) return 1;
		if (wordLength === 0) return 0;
		if (subsequencesCount[wordLength][targetLength] !== undefined) {
			return subsequencesCount[wordLength][targetLength];
		}
		if (word[wordLength - 1] !== target[targetLength - 1]) {
			subsequencesCount[wordLength][targetLength] = distinctSubsequences(
				wordLength - 1,
				targetLength
			);
			return subsequencesCount[wordLength][targetLength];
		}
		subsequencesCount[wordLength][targetLength] =
			distinctSubsequences(wordLength - 1, targetLength - 1) +
			distinctSubsequences(wordLength - 1, targetLength);

		return subsequencesCount[wordLength][targetLength];
	}
	return distinctSubsequences(word.length, target.length);
}
