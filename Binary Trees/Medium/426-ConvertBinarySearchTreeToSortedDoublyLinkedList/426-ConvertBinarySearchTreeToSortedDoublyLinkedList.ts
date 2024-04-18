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
	// Create a stack to store the nodes to visit.
	const toVisit = [];
	// Start with the root of the tree.
	let current = root;
	let head = new TreeNode();
	let previous = head;
	// While there are left nodes to visit or the right subtree is not empty.
	while (toVisit.length || current) {
		// Go to the leftmost node of the current subtree.
		while (current) {
			toVisit.push(current);
			current = current.left;
		}
		// Get the leftmost node from the stack.
		current = toVisit.pop();
		current.left = previous;
		previous.right = current;
		previous = current;
		// Go to the right subtree.
		current = current.right;
	}
	head = head.right;
	if (head) {
		head.left = previous;
		previous.right = head;
	}
	return head;
}
