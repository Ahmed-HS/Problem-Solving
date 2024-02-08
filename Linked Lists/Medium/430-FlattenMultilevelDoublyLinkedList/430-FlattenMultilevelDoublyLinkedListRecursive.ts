/**
 * Medium
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */
function flatten(head: Node | null): Node | null {
	function flattenList(head: Node | null): Node | null {
		const next = head?.next;
		const child = head?.child;
		
		/**
		 * If there is no child, we continue flattening the next node.
		 * If there is no next node, we return the current node.
		 */
		if (!child) {
			return next ? flattenList(next) : head;
		}

		/**
		 * If there is a child, we flatten the child list.
		 * and return the last node of the child list.
		 * Then connect the last node of the child list
		 * to the next node of the current list.
		 */
		const childListEnd = flattenList(child);

		head.next = child;
		child.prev = head;
		childListEnd.next = next;

		if (next) {
			next.prev = childListEnd;
		}

		head.child = null;

		/**
		 * The child list should now be flattened.
		 * And connected to the next node of the current list.
		 * We continue flattening the next node.
		 */
		return next ? flattenList(next) : childListEnd;
	}
	/**
	 * FlattenList will return the last node of the list.
	 * So we can't use its return value directly.
	 */
	flattenList(head);
	return head;
}
