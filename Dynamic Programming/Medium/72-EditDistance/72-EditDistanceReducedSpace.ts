/**
 * Medium
 * https://leetcode.com/problems/edit-distance/
 */
function minDistance(word1: string, word2: string): number {
	const previousDistance = new Array(word2.length + 1);
	const currentDistance = new Array(word2.length + 1);
	for (let i = 0; i < previousDistance.length; i++) {
		previousDistance[i] = i;
		currentDistance[i] = i;
	}
	for (let word1Length = 1; word1Length <= word1.length; word1Length++) {
		currentDistance[0] = word1Length;
		for (let word2Length = 1; word2Length <= word2.length; word2Length++) {
			if (word1[word1Length - 1] === word2[word2Length - 1]) {
				currentDistance[word2Length] =
					previousDistance[word2Length - 1];
			} else {
				const insertAtWord1 = currentDistance[word2Length - 1];
				const deleteAtWord1 = previousDistance[word2Length];
				const replaceAtWord1 = previousDistance[word2Length - 1];
				currentDistance[word2Length] =
					1 + Math.min(insertAtWord1, deleteAtWord1, replaceAtWord1);
			}
		}
		currentDistance.forEach(
			(value, index) => (previousDistance[index] = value)
		);
	}
	return currentDistance[word2.length];
}
