/**
 * Easy
 * https://leetcode.com/problems/palindrome-linked-list/
 */
function isPalindrome(head: ListNode | null): boolean {

    let firstHalf = head;
    let secondHalf = getMiddleNode(head);

    secondHalf = reverseList(secondHalf);

    while (secondHalf) {

        if (firstHalf.val !== secondHalf.val) {
            return false;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

function getMiddleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

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