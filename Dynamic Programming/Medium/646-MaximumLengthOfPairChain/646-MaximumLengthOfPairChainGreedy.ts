/**
 * Medium
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 */
function findLongestChain(pairs: number[][]): number {
	pairs.sort((a, b) => a[1] - b[1]);

	let previous = -Infinity;
	let maxChainLength = 0;
	for (const [first, second] of pairs) {
		if (first > previous) {
			previous = second;
			maxChainLength++;
		}
	}
	return maxChainLength;
}
