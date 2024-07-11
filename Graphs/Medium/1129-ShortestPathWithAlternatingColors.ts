/**
 * Medium
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/
 */
function shortestAlternatingPaths(
	n: number,
	redEdges: number[][],
	blueEdges: number[][]
): number[] {
	const graph = new Map<number, number[][]>();
	const RED = 0;
	const BLUE = 1;
	for (let i = 0; i < n; i++) graph.set(i, []);
	for (const [source, destination] of redEdges) {
		graph.get(source).push([destination, RED]);
	}
	for (const [source, destination] of blueEdges) {
		graph.get(source).push([destination, BLUE]);
	}

	const distance = Array.from({ length: n }, () => [-1, -1]);
	distance[0][RED] = 0;
	distance[0][BLUE] = 0;

	const toVisit = [
		[0, RED],
		[0, BLUE],
	];

	while (toVisit.length) {
		const [node, lastEdge] = toVisit.shift();
		const neighbours = graph.get(node);
		for (const [neighbour, edgeColor] of neighbours) {
			if (
				edgeColor !== lastEdge &&
				distance[neighbour][edgeColor] === -1
			) {
				distance[neighbour][edgeColor] = distance[node][lastEdge] + 1;
				toVisit.push([neighbour, edgeColor]);
			}
		}
	}
	return distance.map((d) => {
		if (d[0] === -1) return d[1];
		if (d[1] === -1) return d[0];
		return Math.min(...d);
	});
}
