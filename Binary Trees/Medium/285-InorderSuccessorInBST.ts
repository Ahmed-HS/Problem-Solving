/**
 * Medium
 * https://leetcode.com/problems/inorder-successor-in-bst/
 */
function inorderSuccessor(
	root: TreeNode | null,
	targetNode: TreeNode | null
): TreeNode | null {
	// Variable to hold the in-order successor as we traverse the tree.
	let successor: TreeNode | null = null;

	// Loop through the tree starting from the root.
	while (root !== null) {
		// If the current node's value is greater than the targetNode's value,
		// then this node could be the successor. We also move to the left child,
		// because if there is a smaller value than the current node's value that
		// is still larger than the targetNode's value, it would be in the left subtree.
		if (root.val > targetNode.val) {
			successor = root;
			root = root.left;
		} else {
			// If the current node's value is less than or equal to the targetNode's value,
			// we move to the right child to look for a larger value.
			root = root.right;
		}
	}
	// Return the found successor, which might be null if there's no successor in the tree.
	return successor;
}
