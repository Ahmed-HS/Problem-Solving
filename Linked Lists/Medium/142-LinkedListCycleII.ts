/**
 * Medium
 * https://leetcode.com/problems/linked-list-cycle-ii/
 */
function detectCycle(head: ListNode | null): ListNode | null {

    let slow = head;
    let fast = head;

    while (fast) {
        slow = slow.next;
        fast = fast.next?.next;
        if (slow === fast) {
            break;
        }
    }

    if (!fast) {
        return null;
    }

    let cycleStart = head;

    while (slow !== cycleStart) {
        slow = slow.next;
        cycleStart = cycleStart.next;
    }

    return cycleStart;
}