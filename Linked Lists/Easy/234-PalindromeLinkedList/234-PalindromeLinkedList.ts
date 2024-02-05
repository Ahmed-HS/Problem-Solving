/**
 * Easy
 * https://leetcode.com/problems/palindrome-linked-list/
 */
function isPalindrome(head: ListNode | null): boolean {

    let current = head;
    let lenght = 0;

    while (current) {
        current = moveBy(current, 1);
        lenght++;
    }

    let middle = Math.floor(lenght / 2);
    let firstHalf = head;
    let secondHalf = moveBy(head, middle);

    if (lenght % 2 === 1) {
        secondHalf = moveBy(secondHalf, 1);
    }

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

function moveBy(head: ListNode | null, steps: number): ListNode | null {
    let current = head;
    while (steps > 0) {
        current = current.next;
        steps--;
    }
    return current;
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