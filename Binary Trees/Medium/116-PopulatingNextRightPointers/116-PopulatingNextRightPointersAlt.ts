/**
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 */
function connect(root: Node | null): Node | null {
	let leftMost = root;
	/**
	 * Traverse the tree level by level,
	 * starting from the leftmost node of each level.
	 * If the leftmost node is null, we have traversed all levels.
	 */
	while (leftMost?.left) {
		let current = leftMost;
		while (current) {
			// Connect the left child's next to the right child.
			current.left.next = current.right;
			/**
			 * Connect the right child's next by going
			 * through the current node's next then getting
			 * its left child.
			 */
			if (current.next) {
				current.right.next = current.next.left;
			}
			// Use the next node to move forward in the current level.
			current = current.next;
		}
		// Move to the leftmost node of the next level.
		leftMost = leftMost.left;
	}
	return root;
}
