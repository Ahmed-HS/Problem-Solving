/**
 * Easy
 * https://leetcode.com/problems/reverse-linked-list/
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (!head?.next) {
        return head;
    }
    const reversed = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversed;
}