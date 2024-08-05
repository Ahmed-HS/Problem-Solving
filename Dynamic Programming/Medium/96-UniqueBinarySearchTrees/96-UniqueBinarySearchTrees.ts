/**
 * Medium
 * https://leetcode.com/problems/unique-binary-search-trees/
 */
function numTrees(nodes: number): number {
	const treesCount = new Array(nodes + 1).fill(0);
	treesCount[0] = 1;
	treesCount[1] = 1;

	for (let nodesCount = 2; nodesCount <= nodes; nodesCount++) {
		for (let rootNode = 1; rootNode <= nodesCount; rootNode++) {
			const leftCount = rootNode - 1;
			const rightCount = nodesCount - rootNode;
			treesCount[nodesCount] +=
				treesCount[leftCount] * treesCount[rightCount];
		}
	}

	return treesCount[nodes];
}
