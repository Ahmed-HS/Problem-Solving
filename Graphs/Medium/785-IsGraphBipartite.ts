/**
 * Medium
 * https://leetcode.com/problems/is-graph-bipartite/
 */
function isBipartite(graph: number[][]): boolean {
	const nodeGroup = new Array(graph.length).fill(0);
	function markNodes(node: number, marker: number) {
		if (nodeGroup[node] !== 0) return nodeGroup[node] === marker;
		nodeGroup[node] = marker;
		for (const next of graph[node]) {
			if (!markNodes(next, -marker)) return false;
		}
		return true;
	}
	for (let node = 0; node < graph.length; node++) {
		if (nodeGroup[node] === 0 && !markNodes(node, 1)) return false;
	}
	return true;
}
