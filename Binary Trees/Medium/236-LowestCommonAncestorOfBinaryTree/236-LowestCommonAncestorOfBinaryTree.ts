/**
 * Medium
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */
function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null
): TreeNode | null {
	const parent = new Map<TreeNode, TreeNode>();
	const toVisit = [];
	parent.set(root, null);
	toVisit.push(root);
	// Traverse the tree until we find both nodes
	while (!parent.has(p) || !parent.has(q)) {
		const node = toVisit.pop();
		if (node.left) {
			parent.set(node.left, node);
			toVisit.push(node.left);
		}
		if (node.right) {
			parent.set(node.right, node);
			toVisit.push(node.right);
		}
	}
	const ancestors = new Set<TreeNode>();
	// Find all ancestors of p
	while (p) {
		ancestors.add(p);
		p = parent.get(p);
	}
	// Find the first ancestor of q that is also an ancestor of p
	while (!ancestors.has(q)) {
		q = parent.get(q);
	}
	return q;
}
