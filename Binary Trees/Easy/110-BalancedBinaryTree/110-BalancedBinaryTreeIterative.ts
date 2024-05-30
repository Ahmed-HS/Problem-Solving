/**
 * Easy
 * https://leetcode.com/problems/balanced-binary-tree/
 */
function isBalanced(root: TreeNode | null): boolean {
	const toVisit = [];
	let current = root;
	let last = null;
	const depths = new Map<TreeNode, number>();

	while (toVisit.length > 0 || current !== null) {
		// Go left as far as possible in the current subtree.
		while (current) {
			toVisit.push(current);
			current = current.left;
		}
		// Get the leftmost node.
		current = toVisit[toVisit.length - 1];
		/**
		 * If the current node has a right child but it wasn't the last node
		 * visited, then visit the right child next to calculate its depth.
		 * Otherwise, visit the current node to calculate its depth.
		 */
		if (current.right !== null && last !== current.right) {
			current = current.right;
			continue;
		}
		/**
		 * Both children of the current node have been visited
		 * and their depths have been calculated.
		 * Calculate the depth of the current subtree rooted at the current node
		 * by adding 1 to the maximum depth of its children.
		 * if the difference in depth between the left and right subtrees is greater than 1,
		 * then the tree is unbalanced.
		 */
		current = toVisit.pop();
		const leftDepth = depths.get(current.left) ?? 0;
		const rightDepth = depths.get(current.right) ?? 0;
		if (Math.abs(leftDepth - rightDepth) > 1) return false;
		depths.set(current, 1 + Math.max(leftDepth, rightDepth));
		last = current;
		current = null;
	}
	return true;
}
