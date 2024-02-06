/**
 * Easy
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	let head = new ListNode();
	let mergedList = head;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			mergedList.next = list1;
			list1 = list1.next;
		} else {
			mergedList.next = list2;
			list2 = list2.next;
		}
		mergedList = mergedList.next;
	}

	mergedList.next = list1 ? list1 : list2;

	return head.next;
}
