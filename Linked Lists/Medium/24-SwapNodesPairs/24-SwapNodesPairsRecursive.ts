/**
 * Medium
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */
function swapPairs(head: ListNode | null): ListNode | null {
	if (!head?.next) return head;
	const adjacent = head.next;
	head.next = swapPairs(adjacent.next);
	adjacent.next = head;
	return adjacent;
}
