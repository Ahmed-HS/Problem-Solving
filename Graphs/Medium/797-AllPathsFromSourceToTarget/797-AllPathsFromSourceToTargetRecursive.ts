/**
 * Medium
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 */
function allPathsSourceTarget(graph: number[][]): number[][] {
	function dfs(node: number = 0, path: number[] = [0]) {
		if (node === graph.length - 1) return [[...path]];
		const allPaths = [];
		for (const neighbour of graph[node]) {
			path.push(neighbour);
			allPaths.push(...dfs(neighbour, path));
			path.pop();
		}
		return allPaths;
	}
	return dfs();
}
