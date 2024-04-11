/**
 * Medium
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
function isValidBST(root: TreeNode | null): boolean {
	/**
	 * The inorder traversal of a binary search tree is a sorted array.
	 * We can perform an inorder traversal of the tree and keep track of the last
	 * value we visited. If the current value is less than or equal to the last value,
	 * then the tree is not a binary search tree.
	 */
	let lastValue = -Infinity;
	const toVisit = [];
	// Start with the root of the tree.
	let current = root;
	// While there are left nodes to visit or the right subtree is not empty.
	while (toVisit.length || current) {
		// Go to the leftmost node of the current subtree.
		while (current) {
			toVisit.push(current);
			current = current.left;
		}
		// Get the leftmost node from the stack.
		current = toVisit.pop();
		if (current.val <= lastValue) return false;
		lastValue = current.val;
		// Go to the right subtree.
		current = current.right;
	}
	return true;
}
