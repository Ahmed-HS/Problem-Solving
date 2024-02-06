/**
 * Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (!list1) {
		return list2;
	}

	if (!list2) {
		return list1;
	}
	/**
	 * We find the smaller node between the two lists,
	 * and use it as the head of the merged list.
	 * As we have taken the smaller node as the head,
	 * we can call mergeTwoLists with the next node of the smaller node
	 * to continue merging the remaining nodes of the two lists.
	 */
	const smallerNode = list1.val < list2.val ? list1 : list2;
	const largerNode = smallerNode === list1 ? list2 : list1;
	smallerNode.next = mergeTwoLists(smallerNode.next, largerNode);

	return smallerNode;
}
