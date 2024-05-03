/**
 * Medium
 * https://leetcode.com/problems/find-duplicate-subtrees/
 */
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
	const duplicateSubtrees = new Set<TreeNode>();
	const treeIds = new Map<string, number>();
	const idToNode = new Map<number, TreeNode>();
	let nextId = 1;
	function findDuplicates(tree: TreeNode) {
		if (!tree) return 0;
		const treeKey = [
			tree.val,
			findDuplicates(tree.left),
			findDuplicates(tree.right),
		].join();
		const treeId = treeIds.get(treeKey);
		if (treeId) {
			const seenTree = idToNode.get(treeId);
			duplicateSubtrees.add(seenTree);
		} else {
			treeIds.set(treeKey, nextId);
			idToNode.set(nextId, tree);
			nextId++;
		}
		return treeIds.get(treeKey);
	}
	findDuplicates(root);
	return [...duplicateSubtrees];
}
