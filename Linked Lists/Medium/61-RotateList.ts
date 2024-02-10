/**
 * Medium
 * https://leetcode.com/problems/rotate-list/
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
	/**
	 * We get the length of the list,
	 * to calcuate the number of rotations,
	 * If k is divisible by the length of the list,
	 * the list will remain the same.
	 */
	const length = getLength(head);
	k = k % length;

	/**
	 * If k is 0 or NaN, we return the list as is.
	 * NaN is returned when the length of the list is 0.
	 * k % 0 = NaN
	 */
	if (k === 0 || Number.isNaN(k)) {
		return head;
	}

	/**
	 * We find the node before the new head (split point),
	 * which is the node at length - k - 1.
	 */
	const splitPoint = moveBy(head, length - k - 1);
	const newHead = splitPoint.next;

	// We get the last node of the list.
	let listEnd = newHead;
	while (listEnd?.next) {
		listEnd = listEnd.next;
	}

	/**
	 * We connect the last node of the list
	 * to the original head.
	 * Then we set the next of the split point to null.
	 */
	listEnd.next = head;
	splitPoint.next = null;

	return newHead;
}

function moveBy(head: ListNode | null, steps: number): ListNode | null {
	let current = head;
	while (steps > 0) {
		current = current.next;
		steps--;
	}
	return current;
}

function getLength(head: ListNode | null): number {
	let length = 0;
	while (head) {
		head = head.next;
		length++;
	}
	return length;
}
