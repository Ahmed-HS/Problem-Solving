/**
 * Medium
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
 */
function connect(root: Node | null): Node | null {
	/**
	 * The idea is to connect the next pointers of the
	 * next level while traversing the current level.
	 * We use a dummy node to keep track of the head of the next level.
	 * We also use a previous node to keep track of the last visited node
	 * in the next level.
	 */
	let current = root;
	const dummy = new Node();
	let previous = dummy;
	while (current) {
		/**
		 * If the current node has a left child,
		 * connect the previous node's next to
		 * the left child and make it the new previous node.
		 * Do the same for the right child.
		 * If the left or right child is the first node
		 * in the level, The dummy node's next will
		 * be the head of the next level.
		 */
		if (current.left) {
			previous.next = current.left;
			previous = current.left;
		}
		if (current.right) {
			previous.next = current.right;
			previous = current.right;
		}
		/**
		 * If the current node has a next node,
		 * it means we still have nodes to visit in the current level.
		 * Otherwise we move to the next level.
		 */
		current = current.next;
		if (!current) {
			// dummy.next is the head of the next level.
			current = dummy.next;
			/**
			 * Reset the dummy node's next to null
			 * to prepare for the new next level.
			 * If dummy.next remains null, it means we have
			 * traversed all levels.
			 */
			dummy.next = null;
			previous = dummy;
		}
	}
	return root;
}
