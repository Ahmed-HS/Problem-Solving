/**
 * Medium
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */
function flatten(
	head: Node | null,
	upperLevelRemaining: Node | null = null
): Node | null {
	/**				* remaing nodes of the upper level
	 *  1---2---3---4---5---6--NULL
				|			The last node of the current level
				7---8---9---10--NULL
					|
					11--12--NULL
	 * If we hit null, we return the remaining nodes of the upper level.
	 * Then make the next pointer of the last node of the current level
	 * point to the remaining nodes of the upper level.
	 */
	if (!head) {
		return upperLevelRemaining;
	}
	/**
	 * We linearly traverse the current level.
	 * When we reach the last node of the current level,
	 * The remaining nodes of the upper level are returned.
	 */
	const flattenedNext = flatten(head.next, upperLevelRemaining);

	/**
	 * We go down the child list to continue connecting the
	 * last node of the child list to the remaining nodes of the current level.
	 * The flattenedNext is the remaining nodes of the current level.
	 */
	const flattenedChild = head.child ? flatten(head.child, flattenedNext) : flattenedNext;

	/**
	 * When the head is the last node of the current level,
	 * and it has no child, flattenedChild will contain the
	 * remaining nodes of the upper level.
	 */
	head.next = flattenedChild;

	/**
	 * If there are remaining nodes of the upper level,
	 * we make the prev pointer of the start of the remaining nodes
	 * point to the last node of the current level.
	 */
	if (flattenedChild) {
		flattenedChild.prev = head;
	}
	// We set the child to null as we have already connected the child list.
	head.child = null;
	return head;
}