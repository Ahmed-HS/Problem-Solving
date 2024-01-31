/**
 * Medium
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Two pass solution
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    const length = getLength(head);
    let index = length - n - 1;

    if (index < 0) {
        return head?.next;
    }

    let current = head;
    while (index > 0) {
        index--;
        current = current.next;
    }

    current.next = current.next.next;

    return head;
}

function getLength(head: ListNode | null): number {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}