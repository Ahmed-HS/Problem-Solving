/**
 * Medium
 * https://leetcode.com/problems/edit-distance/
 */
function minDistance(word1: string, word2: string): number {
	const minimumDistance = Array.from({ length: word1.length + 1 }, () =>
		new Array(word2.length + 1).fill(undefined)
	);
	function minDistance(word1Length: number, word2Length: number) {
		if (word1Length === 0) return word2Length;
		if (word2Length === 0) return word1Length;
		if (minimumDistance[word1Length][word2Length] !== undefined) {
			return minimumDistance[word1Length][word2Length];
		}
		if (word1[word1Length - 1] === word2[word2Length - 1]) {
			minimumDistance[word1Length][word2Length] = minDistance(
				word1Length - 1,
				word2Length - 1
			);
			return minimumDistance[word1Length][word2Length];
		}
		const insertAtWord1 = minDistance(word1Length, word2Length - 1);
		const deleteAtWord1 = minDistance(word1Length - 1, word2Length);
		const replaceAtWord1 = minDistance(word1Length - 1, word2Length - 1);
		minimumDistance[word1Length][word2Length] =
			1 + Math.min(insertAtWord1, deleteAtWord1, replaceAtWord1);
		return minimumDistance[word1Length][word2Length];
	}
	return minDistance(word1.length, word2.length);
}
