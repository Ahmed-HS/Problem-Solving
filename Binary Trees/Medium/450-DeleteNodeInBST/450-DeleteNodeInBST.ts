/**
 * Medium
 * https://leetcode.com/problems/delete-node-in-a-bst/
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	// Find the node to delete and its parent.
	let parent = null;
	let current = root;
	while (current && current.val !== key) {
		parent = current;
		current = key > current.val ? current.right : current.left;
	}
	// If the node is not found, return the tree as is.
	if (!current) return root;
	// If the node has one child, replace the node with its child.
	if (current.left === null || current.right === null) {
		const child = current.left ?? current.right;
		// If the node to delete is the root, return the child as the new root.
		if (!parent) return child;
		// Update the node's parent to point to the child.
		if (current.val > parent.val) {
			parent.right = child;
		} else {
			parent.left = child;
		}
		// Return the updated root.
		return root;
	}
	// If the node has two children, find the in-order successor.
	let successor = current.right;
	let successorParent = current;
	while (successor.left) {
		successorParent = successor;
		successor = successor.left;
	}
	// Replace the node to delete value with the in-order successor value.
	current.val = successor.val;
	/**
	 * The successor node will have at most one right child and no left child.
	 * If the successor node is the right child of the node to delete,
	 * update the node to delete right child to point to the successor right child.
	 * Otherwise, update the successor parent left child to point to the successor right child.
	 */
	if (successorParent === current) {
		successorParent.right = successor.right;
	} else {
		successorParent.left = successor.right;
	}
	return root;
}
