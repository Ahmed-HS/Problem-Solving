/**
 * Hard
 * https://leetcode.com/problems/distinct-subsequences/
 */
function numDistinct(word: string, target: string): number {
	const subsequencesCount = Array.from(
		{ length: word.length + 1 },
		() => new Array(target.length + 1)
	);
	subsequencesCount[0][0] = 1;
	for (let i = 1; i <= target.length; i++) {
		subsequencesCount[0][i] = 0;
	}
	for (let wordLength = 1; wordLength <= word.length; wordLength++) {
		subsequencesCount[wordLength][0] = 1;
		for (
			let targetLength = 1;
			targetLength <= target.length;
			targetLength++
		) {
			if (word[wordLength - 1] !== target[targetLength - 1]) {
				subsequencesCount[wordLength][targetLength] =
					subsequencesCount[wordLength - 1][targetLength];
			} else {
				subsequencesCount[wordLength][targetLength] =
					subsequencesCount[wordLength - 1][targetLength - 1] +
					subsequencesCount[wordLength - 1][targetLength];
			}
		}
	}

	return subsequencesCount[word.length][target.length];
}
