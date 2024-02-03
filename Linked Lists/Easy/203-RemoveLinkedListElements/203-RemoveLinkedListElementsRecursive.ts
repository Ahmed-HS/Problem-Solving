/**
 * Easy
 * https://leetcode.com/problems/remove-linked-list-elements/
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }
    const next = removeElements(head.next, val);
    head.next = next;
    return head.val === val ? next : head;
}