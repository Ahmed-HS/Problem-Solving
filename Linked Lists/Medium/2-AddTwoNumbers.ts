/**
 * Medium
 * https://leetcode.com/problems/add-two-numbers/
 */
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let carry = 0;
	const result = new ListNode();
	let current = result;

	while (l1 || l2 || carry) {
		const firstDigit = l1?.val ?? 0;
		const secondDigit = l2?.val ?? 0;
		const sum = firstDigit + secondDigit + carry;
		carry = Math.floor(sum / 10);
		const digit = sum % 10;
		current.next = new ListNode(digit);
		current = current.next;
		l1 = l1?.next;
		l2 = l2?.next;
	}

	return result.next;
}
