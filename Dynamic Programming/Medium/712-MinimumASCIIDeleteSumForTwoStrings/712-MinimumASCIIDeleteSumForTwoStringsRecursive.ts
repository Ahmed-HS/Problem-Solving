/**
 * Medium
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
 */
function minimumDeleteSum(word1: string, word2: string): number {
	const minimumASCIISum = Array.from({ length: word1.length + 1 }, () =>
		new Array(word2.length + 1).fill(undefined)
	);
	function minimumDeleteSum(length1: number, length2: number) {
		if (length1 === 0) return asciiSum(word2, length2);
		if (length2 === 0) return asciiSum(word1, length1);
		if (minimumASCIISum[length1][length2] !== undefined) {
			return minimumASCIISum[length1][length2];
		}
		if (word1[length1 - 1] === word2[length2 - 1]) {
			minimumASCIISum[length1][length2] = minimumDeleteSum(
				length1 - 1,
				length2 - 1
			);
			return minimumASCIISum[length1][length2];
		}
		const deleteS1 =
			word1.charCodeAt(length1 - 1) +
			minimumDeleteSum(length1 - 1, length2);
		const deleteS2 =
			word2.charCodeAt(length2 - 1) +
			minimumDeleteSum(length1, length2 - 1);
		minimumASCIISum[length1][length2] = Math.min(deleteS1, deleteS2);
		return minimumASCIISum[length1][length2];
	}
	return minimumDeleteSum(word1.length, word2.length);
}

function asciiSum(word: string, length: number) {
	return [...word.slice(0, length)]
		.map((letter) => letter.charCodeAt(0))
		.reduce((sum, ascii) => sum + ascii, 0);
}
