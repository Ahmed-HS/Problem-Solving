/**
 * Medium
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 */
function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
	const reachable = new Set(edges.map((edge) => edge[1]));
	const startNodes = [];
	for (let node = 0; node < n; node++) {
		if (!reachable.has(node)) startNodes.push(node);
	}
	return startNodes;
}
