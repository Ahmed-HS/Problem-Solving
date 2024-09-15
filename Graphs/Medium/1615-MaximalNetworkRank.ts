/**
 * Medium
 * https://leetcode.com/problems/maximal-network-rank/
 */
function maximalNetworkRank(n: number, roads: number[][]): number {
	const connections = new Map<number, Set<number>>();
	const inDegree = new Array(n).fill(0);
	for (let node = 0; node < n; node++) {
		connections.set(node, new Set());
	}
	for (const [from, to] of roads) {
		connections.get(from).add(to);
		connections.get(to).add(from);
		inDegree[from]++;
		inDegree[to]++;
	}
	let maxPairRank = 0;
	for (let firstNode = 0; firstNode < n; firstNode++) {
		for (let secondNode = firstNode + 1; secondNode < n; secondNode++) {
			let pairRank = inDegree[firstNode] + inDegree[secondNode];
			pairRank -= connections.get(firstNode).has(secondNode) ? 1 : 0;
			maxPairRank = Math.max(maxPairRank, pairRank);
		}
	}
	return maxPairRank;
}
