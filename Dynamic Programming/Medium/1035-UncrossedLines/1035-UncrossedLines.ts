/**
 * Medium
 * https://leetcode.com/problems/uncrossed-lines/
 */
function maxUncrossedLines(numbers1: number[], numbers2: number[]): number {
	const maxSubsequenceLength = new Array(numbers2.length + 1).fill(0);
	for (let length1 = 1; length1 <= numbers1.length; length1++) {
		let upperLeft = 0;
		for (let length2 = 1; length2 <= numbers2.length; length2++) {
			const previous = maxSubsequenceLength[length2];
			if (numbers1[length1 - 1] === numbers2[length2 - 1]) {
				maxSubsequenceLength[length2] = 1 + upperLeft;
			} else {
				const skip1 = maxSubsequenceLength[length2];
				const skip2 = maxSubsequenceLength[length2 - 1];
				maxSubsequenceLength[length2] = Math.max(skip1, skip2);
			}
			upperLeft = previous;
		}
	}
	return maxSubsequenceLength[numbers2.length];
}
