/**
 * Hard
 * https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
 */
function sortItems(
	n: number,
	m: number,
	group: number[],
	beforeItems: number[][]
): number[] {
	for (let node = 0; node < n; node++) {
		if (group[node] === -1) group[node] = m++;
	}

	const groupsGraph = Array.from({ length: m }, () => new Set<number>());
	const itemsGraph = Array.from({ length: n }, () => []);

	for (let item = 0; item < n; item++) {
		for (const before of beforeItems[item]) {
			itemsGraph[before].push(item);
			if (group[before] === group[item]) continue;
			groupsGraph[group[before]].add(group[item]);
		}
	}

	const sortedGroups = sortGraph(
		groupsGraph.map((neighbours) => [...neighbours])
	);
	const sortedItems = sortGraph(itemsGraph);
	if (sortedGroups.length === 0 || sortedItems.length === 0) return [];

	const groupItems = Array.from({ length: m }, () => []);
	for (const node of sortedItems) {
		groupItems[group[node]].push(node);
	}

	const sortedNodes = [];
	for (const group of sortedGroups) {
		sortedNodes.push(...groupItems[group]);
	}

	return sortedNodes;
}

function sortGraph(graph: number[][]) {
	const nodeCount = graph.length;
	const inDegree = new Array(nodeCount).fill(0);
	for (let node = 0; node < nodeCount; node++) {
		for (const neighbour of graph[node]) {
			inDegree[neighbour]++;
		}
	}
	const toVisit = [];
	for (let node = 0; node < nodeCount; node++) {
		if (inDegree[node] === 0) toVisit.push(node);
	}
	const sorted = [];
	while (toVisit.length) {
		const node = toVisit.pop();
		sorted.push(node);
		for (const neighbour of graph[node]) {
			inDegree[neighbour]--;
			if (inDegree[neighbour] === 0) toVisit.push(neighbour);
		}
	}
	return sorted.length === nodeCount ? sorted : [];
}
