/**
 * Medium
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 */
function minReorder(n: number, connections: number[][]): number {
	const graph: number[][][] = Array.from({ length: n }, () => []);
	const FORWARD = 0;
	const BACKWARD = 1;
	for (const [source, target] of connections) {
		graph[source].push([target, FORWARD]);
		graph[target].push([source, BACKWARD]);
	}
	let edgesToFlip = 0;
	const toVisit = [[0, -1]];
	while (toVisit.length) {
		const [node, parent] = toVisit.pop();
		const neighbours = graph[node];
		for (const [neighbour, edgeType] of neighbours) {
			if (neighbour === parent) continue;
			if (edgeType === FORWARD) edgesToFlip++;
			toVisit.push([neighbour, node]);
		}
	}
	return edgesToFlip;
}
