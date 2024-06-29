/**
 * Medium
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
 */
function minimumDeleteSum(word1: string, word2: string): number {
	const minimumASCIISum = Array.from(
		{ length: word1.length + 1 },
		() => new Array(word2.length + 1)
	);
	minimumASCIISum[0][0] = 0;
	for (let i = 1; i <= word1.length; i++) {
		minimumASCIISum[i][0] =
			word1.charCodeAt(i - 1) + minimumASCIISum[i - 1][0];
	}
	for (let i = 1; i <= word2.length; i++) {
		minimumASCIISum[0][i] =
			word2.charCodeAt(i - 1) + minimumASCIISum[0][i - 1];
	}
	for (let length1 = 1; length1 <= word1.length; length1++) {
		for (let length2 = 1; length2 <= word2.length; length2++) {
			if (word1[length1 - 1] === word2[length2 - 1]) {
				minimumASCIISum[length1][length2] =
					minimumASCIISum[length1 - 1][length2 - 1];
			} else {
				const deleteS1 =
					word1.charCodeAt(length1 - 1) +
					minimumASCIISum[length1 - 1][length2];
				const deleteS2 =
					word2.charCodeAt(length2 - 1) +
					minimumASCIISum[length1][length2 - 1];
				minimumASCIISum[length1][length2] = Math.min(
					deleteS1,
					deleteS2
				);
			}
		}
	}
	return minimumASCIISum[word1.length][word2.length];
}
