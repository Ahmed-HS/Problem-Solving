/**
 * Hard
 * https://leetcode.com/problems/largest-color-value-in-a-directed-graph/
 */
function largestPathValue(colors: string, edges: number[][]): number {
	const graph = Array.from({ length: colors.length }, () => []);
	const colorFrequency = Array.from({ length: colors.length }, () =>
		new Array(26).fill(0)
	);
	const inDegree = new Array(colors.length).fill(0);
	for (const [from, to] of edges) {
		graph[from].push(to);
		inDegree[to]++;
	}
	const toVisit = [];
	for (let node = 0; node < graph.length; node++) {
		if (inDegree[node] === 0) toVisit.push(node);
	}
	let visited = 0;
	let maxColor = 0;
	while (toVisit.length) {
		visited++;
		const node = toVisit.pop();
		const nodeColor = colors.charCodeAt(node) - "a".charCodeAt(0);
		colorFrequency[node][nodeColor]++;
		maxColor = Math.max(maxColor, colorFrequency[node][nodeColor]);
		for (const next of graph[node]) {
			for (let color = 0; color < 26; color++) {
				colorFrequency[next][color] = Math.max(
					colorFrequency[next][color],
					colorFrequency[node][color]
				);
			}
			inDegree[next]--;
			if (inDegree[next] === 0) toVisit.push(next);
		}
	}
	return visited === colors.length ? maxColor : -1;
}
