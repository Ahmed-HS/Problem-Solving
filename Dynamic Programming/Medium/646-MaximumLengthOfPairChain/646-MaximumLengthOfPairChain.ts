/**
 * Medium
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 */
function findLongestChain(pairs: number[][]): number {
	// Sort pairs based on the first element of each pair
	pairs.sort((a, b) => a[0] - b[0]);

	// Initialize dp array where dp[i] represents the length of the longest chain ending with pairs[i]
	const longestChainLengths = new Array(pairs.length).fill(1);

	// Iterate through each pair to calculate the longest chain length
	for (let current = 0; current < pairs.length; current++) {
		for (let previous = 0; previous < current; previous++) {
			if (pairs[current][0] > pairs[previous][1]) {
				longestChainLengths[current] = Math.max(
					longestChainLengths[current],
					longestChainLengths[previous] + 1
				);
			}
		}
	}
	// Return the maximum value in the longestChainLengths array
	return longestChainLengths[pairs.length - 1];
}
