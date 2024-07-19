/**
 * Medium
 * https://leetcode.com/problems/all-paths-from-source-to-target/
 */
function allPathsSourceTarget(graph: number[][]): number[][] {
	type NodePath = [number, number[]];
	const allPath = [];
	const toVisit: NodePath[] = [[0, [0]]];
	while (toVisit.length) {
		const [node, path] = toVisit.pop();
		if (node === graph.length - 1) {
			allPath.push(path);
			continue;
		}
		graph[node].forEach((neighbour) => {
			toVisit.push([neighbour, [...path, neighbour]]);
		});
	}
	return allPath;
}
