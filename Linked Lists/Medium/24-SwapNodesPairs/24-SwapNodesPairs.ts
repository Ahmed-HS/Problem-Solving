/**
 * Medium
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */
function swapPairs(head: ListNode | null): ListNode | null {
	const dummy = new ListNode(0, head);
	let previous = dummy;
	let current = head;
	while (current?.next) {
		const adjacent = current.next;
		const next = adjacent.next;
		current.next = next;
		adjacent.next = current;
		previous.next = adjacent;
		previous = current;
		current = next;
	}
	return dummy.next;
}
