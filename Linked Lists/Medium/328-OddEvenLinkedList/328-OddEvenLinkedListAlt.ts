/**
 * Medium
 * https://leetcode.com/problems/odd-even-linked-list/
 */
function oddEvenList(head: ListNode | null): ListNode | null {

    if (!head?.next) {
        return head;
    }

    let oddList = head;
    let evenList = head?.next;
    const evenStart = evenList;

    /**
     * The even list pointer is always one step ahead.
     * So, if it reaches the last node or null,
     * the odd list pointer will have the last odd node.
     */
    while (evenList?.next) {

        oddList.next = oddList.next.next;
        oddList = oddList.next;

        evenList.next = evenList.next.next;
        evenList = evenList.next;

    }

    oddList.next = evenStart;

    return head;
}