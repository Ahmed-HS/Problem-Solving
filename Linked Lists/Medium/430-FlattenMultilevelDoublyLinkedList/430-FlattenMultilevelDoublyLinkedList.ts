/**
 * Medium
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */
function flatten(head: Node | null): Node | null {
	let current = head;
	while (current) {
		const child = current.child;
		/**
		 * If the current node has no child, we continue to the next node.
		 */
		if (!child) {
			current = current.next;
			continue;
		}
		/**
		 * If the current node has a child,
		 * We find the last node of the child list.
		 */
		let lastChildNode = child;
		while (lastChildNode.next) {
			lastChildNode = lastChildNode.next;
		}

		// save the old next node of the current node
		const oldNext = current.next;

		// make the next of the current node point to the child list
		current.next = child;
		child.prev = current;

		/**
		 * Connect the last node of the child list
		 * to the next node of the current list.
		 */
		lastChildNode.next = oldNext;
		if (oldNext) {
			oldNext.prev = lastChildNode;
		}

		current.child = null;
	}
	return head;
}
