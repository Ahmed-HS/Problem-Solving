/**
 * Medium
 * https://leetcode.com/problems/find-eventual-safe-states/
 */
function eventualSafeNodes(graph: number[][]): number[] {
	const isSafe: boolean[] = new Array(graph.length).fill(undefined);
	function dfs(node: number) {
		/**
		 * If we have already visited this node,
		 * we return whether it is safe or not.
		 */
		if (isSafe[node] !== undefined) return isSafe[node];
		/**
		 * First we mark the node as unsafe, then we
		 * visit all its neighbours. If any of the neighbours
		 * is unsafe, we return false. If all the neighbours
		 * are safe, we mark the node as safe and return true.
		 */
		isSafe[node] = false;
		for (const neighbour of graph[node]) {
			if (!dfs(neighbour)) return false;
		}
		isSafe[node] = true;
		return true;
	}
	const safeNodes = [];
	for (let i = 0; i < graph.length; i++) {
		if (dfs(i)) {
			safeNodes.push(i);
		}
	}
	return safeNodes;
}
