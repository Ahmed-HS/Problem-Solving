/**
 * Medium
 * https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
 */
function treeToDoublyList(root: TreeNode | null): TreeNode | null {
	/**
	 * We can perform an inorder traversal of the tree and keep track of the last
	 * node we visited. We can then set the left pointer of the current node to the
	 * previous node and the right pointer of the previous node to the current node.
	 * After the traversal, we can set the head's left pointer to the last node and
	 * the last node's right pointer to the head.
	 */
	let head = new TreeNode();
	let previous = head;
	function toList(current: TreeNode | null) {
		if (!current) return;
		toList(current.left);
		current.left = previous;
		previous.right = current;
		previous = current;
		toList(current.right);
	}
	toList(root);
	head = head.right;
	if (head) {
		head.left = previous;
		previous.right = head;
	}
	return head;
}
