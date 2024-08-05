/**
 * Medium
 * https://leetcode.com/problems/unique-binary-search-trees/
 */
function numTrees(nodesCount: number): number {
	const treesCount = new Array(nodesCount).fill(undefined);

	function calculateUniqueTrees(nodes: number): number {
		if (nodes <= 1) return 1;
		if (treesCount[nodes] !== undefined) return treesCount[nodes];
		treesCount[nodes] = 0;
		for (let rootNode = 1; rootNode <= nodes; rootNode++) {
			const leftCount = rootNode - 1;
			const rightCount = nodes - rootNode;
			treesCount[nodes] +=
				calculateUniqueTrees(leftCount) *
				calculateUniqueTrees(rightCount);
		}

		return treesCount[nodes];
	}

	return calculateUniqueTrees(nodesCount);
}
