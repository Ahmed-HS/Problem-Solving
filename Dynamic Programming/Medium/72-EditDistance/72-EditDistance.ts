/**
 * Medium
 * https://leetcode.com/problems/edit-distance/
 */
function minDistance(word1: string, word2: string): number {
	const minimumDistance = Array.from(
		{ length: word1.length + 1 },
		() => new Array(word2.length + 1)
	);
	for (let i = 0; i <= word2.length; i++) {
		minimumDistance[0][i] = i;
	}
	for (let word1Length = 1; word1Length <= word1.length; word1Length++) {
		minimumDistance[word1Length][0] = word1Length;
		for (let word2Length = 1; word2Length <= word2.length; word2Length++) {
			if (word1[word1Length - 1] === word2[word2Length - 1]) {
				minimumDistance[word1Length][word2Length] =
					minimumDistance[word1Length - 1][word2Length - 1];
			} else {
				const insertAtWord1 =
					minimumDistance[word1Length][word2Length - 1];
				const deleteAtWord1 =
					minimumDistance[word1Length - 1][word2Length];
				const replaceAtWord1 =
					minimumDistance[word1Length - 1][word2Length - 1];
				minimumDistance[word1Length][word2Length] =
					1 + Math.min(insertAtWord1, deleteAtWord1, replaceAtWord1);
			}
		}
	}
	return minimumDistance[word1.length][word2.length];
}
