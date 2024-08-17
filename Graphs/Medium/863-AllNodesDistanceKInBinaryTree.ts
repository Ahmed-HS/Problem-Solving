/**
 * Medium
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 */
function distanceK(
	root: TreeNode | null,
	target: TreeNode | null,
	k: number
): number[] {
	const graph = new Map<number, number[]>();
	function buildGraph(current: TreeNode | null, parent: TreeNode | null) {
		if (!current) return [];
		const neighbors = graph.get(current.val) ?? [];
		graph.set(current.val, neighbors);
		if (parent) neighbors.push(parent.val);
		neighbors.push(...buildGraph(current.left, current));
		neighbors.push(...buildGraph(current.right, current));
		return [current.val];
	}
	buildGraph(root, null);
	const visited = new Set<number>();
	visited.add(target.val);
	const toVisit = [target.val];
	while (k > 0 && toVisit.length) {
		let levelLength = toVisit.length;
		while (levelLength--) {
			const current = toVisit.shift();
			const neighbors = graph.get(current) ?? [];
			for (const neighbor of neighbors) {
				if (visited.has(neighbor)) continue;
				visited.add(neighbor);
				toVisit.push(neighbor);
			}
		}
		k--;
	}
	return toVisit;
}
