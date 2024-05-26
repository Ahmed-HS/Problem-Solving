/**
 * Medium
 * https://leetcode.com/problems/delete-node-in-a-bst/
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	if (root === null) {
		return null;
	}
	/**
	 * If the key is less than the root value,
	 * recursively call deleteNode on the left subtree
	 * to get the updated left subtree without the node to delete.
	 * If the key is greater than the root value,
	 * recursively call deleteNode on the right subtree.
	 */
	if (key < root.val) {
		root.left = deleteNode(root.left, key);
	} else if (key > root.val) {
		root.right = deleteNode(root.right, key);
	} else {
		/**
		 * If the key is equal to the root value,
		 * we have found the node to delete.
		 * If the node has only one child,
		 * return the child node to replace the node to delete.
		 */
		if (root.left === null) return root.right;
		if (root.right === null) return root.left;
		/**
		 * If the node has two children,
		 * find the minimum node in the right subtree.
		 * Replace the node to delete value with the minimum node value.
		 * Recursively call deleteNode on the right subtree
		 * to delete the minimum node.
		 */
		const minimumNode = findMinimum(root.right);
		root.val = minimumNode.val;
		root.right = deleteNode(root.right, minimumNode.val);
	}
	// Return the updated root.
	return root;
}

function findMinimum(root: TreeNode) {
	while (root.left !== null) {
		root = root.left;
	}
	return root;
}
