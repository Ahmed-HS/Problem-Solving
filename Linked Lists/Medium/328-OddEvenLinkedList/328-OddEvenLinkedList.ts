/**
 * Medium
 * https://leetcode.com/problems/odd-even-linked-list/
 */
function oddEvenList(head: ListNode | null): ListNode | null {

    const evenList = new ListNode(-1, head);
    let current = evenList;
    let previous = evenList;
    let count = 0;

    while (current.next) {
        const next = current.next;
        current.next = current.next.next;
        previous = current;
        current = next;
        count++;
    }

    /**
     * If the number of nodes is even,
     * then we have to attach the even
     * list to the last odd node.
     */
    if (count % 2 === 0) {
        previous.next = evenList.next;
    } else {
        current.next = evenList.next;
    }

    return head;
}