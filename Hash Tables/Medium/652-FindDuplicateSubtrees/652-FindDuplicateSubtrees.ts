/**
 * Medium
 * https://leetcode.com/problems/find-duplicate-subtrees/
 */
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
	const duplicateSubtrees = new Set<TreeNode>();
	const subtrees = new Map<string, TreeNode>();
	function findDuplicates(tree: TreeNode) {
		if (!tree) return ["#"];
		const traversal = [];
		traversal.push(tree.val);
		traversal.push(...findDuplicates(tree.left));
		traversal.push(...findDuplicates(tree.right));
		const traversalKey = traversal.join();
		const duplicateTree = subtrees.get(traversalKey);
		if (duplicateTree) {
			duplicateSubtrees.add(duplicateTree);
		} else {
			subtrees.set(traversalKey, tree);
		}
		return traversal;
	}
	findDuplicates(root);
	return [...duplicateSubtrees];
}
