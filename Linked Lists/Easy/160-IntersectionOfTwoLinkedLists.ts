/**
 * Easy
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let listA = headA;
    let listB = headB;
    while (listA !== listB) {
        listA = listA ? listA.next : headB;
        listB = listB ? listB.next : headA;
    }
    return listA;
}