/**
 * Medium
 * https://leetcode.com/problems/insertion-sort-list/
 */
function insertionSortList(head: ListNode | null): ListNode | null {
	/**
	 * The head of the dummy list must point to null
	 * to avoid a cycle in the list, and make the last
	 * node point to null.
	 */
	const start = new ListNode(0, null);
	let current = head;
	while (current) {
		let insertPosition = start;
		while (insertPosition.next && insertPosition.next.val < current.val) {
			insertPosition = insertPosition.next;
		}
		const next = current.next;
		current.next = insertPosition.next;
		insertPosition.next = current;
		current = next;
	}
	return start.next;
}
