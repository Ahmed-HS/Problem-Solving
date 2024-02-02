/**
 * Easy
 * https://leetcode.com/problems/reverse-linked-list/
 */
function reverseList(head: ListNode | null): ListNode | null {
    let previous = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}