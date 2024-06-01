/**
 * Medium
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */
function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	// If the tree is empty, or the root is one of the nodes, return the root
	if (!root || root === p || root === q) return root;

	// Search for the nodes in the left and right subtrees.
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	/**
	 * If one node is in the left subtree and the other
	 * is in the right subtree, the LCA is the root.
	 */
	if (right && left) return root;
	/**
	 * Otherwise, both nodes are in the same subtree.
	 * So we return the first non-null node, which
	 * will be found eralier in the traversal near the
	 * top of the tree.
	 */
	return left ?? right;
}
