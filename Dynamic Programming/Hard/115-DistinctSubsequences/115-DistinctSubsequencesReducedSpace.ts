/**
 * Hard
 * https://leetcode.com/problems/distinct-subsequences/
 */
function numDistinct(word: string, target: string): number {
	const subsequencesCount = new Array(target.length + 1).fill(0);
	subsequencesCount[0] = 1;
	for (let wordLength = 1; wordLength <= word.length; wordLength++) {
		for (
			let targetLength = target.length;
			targetLength > 0;
			targetLength--
		) {
			if (word[wordLength - 1] === target[targetLength - 1]) {
				subsequencesCount[targetLength] +=
					subsequencesCount[targetLength - 1];
			}
		}
	}

	return subsequencesCount[target.length];
}
