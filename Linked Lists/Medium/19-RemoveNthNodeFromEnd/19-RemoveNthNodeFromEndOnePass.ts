/**
 * Medium
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * One pass solution
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let slow = head;
    let fast = moveBy(head, n);

    if (!fast) {
        return head?.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return head;
}

function moveBy(head: ListNode | null, steps: number): ListNode | null {
    while (steps > 0) {
        steps--;
        head = head?.next;
    }
    return head;
}