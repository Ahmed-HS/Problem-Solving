/**
 * Medium
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */
function flatten(
	head: Node | null,
	lastVisitedNode: { node: Node | null } = { node: null }
): Node | null {
	if (!head) {
		return null;
	}
	/**
	 * We linearly traverse the current level.
	 * lastVisitedNode.node will be the next node
	 * of the parent list.
	 */
	flatten(head.next, lastVisitedNode);
	/**
	 * If the current node has a child,
	 * lastVisitedNode.node will be the next node
	 * of the current node (head).
	 * This will allow us to linearly traverse the child list.
	 * And then connect the last node of the child list to the
	 * remaining nodes of the current level (head.next).
	 */
	flatten(head.child, lastVisitedNode);
	/**
	 * When head is the last node of the current level,
	 * lastVisitedNode.node will contain the next node of the
	 * parent list.
	 */
	const parentNext = lastVisitedNode.node;
	head.next = parentNext;
	if (parentNext) {
		parentNext.prev = head;
	}
	head.child = null;
	lastVisitedNode.node = head;
	return head;
}
