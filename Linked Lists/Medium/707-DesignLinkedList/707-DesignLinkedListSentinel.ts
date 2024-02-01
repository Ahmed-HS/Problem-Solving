/**
 * Medium
 * https://leetcode.com/problems/design-linked-list/
 * Single linked list with sentinel node
 */
class MyLinkedList {
    length = 0;
    sentinel: LinkedListNode;
    constructor() {
        this.sentinel = new LinkedListNode(-1);
    }

    get(index: number): number {
        return this.getNodeAt(index).value;
    }

    private getNodeAt(index: number): LinkedListNode {
        if (index < 0 || index >= this.length) {
            return this.sentinel;
        }
        let current: LinkedListNode = this.sentinel;
        while (index >= 0) {
            current = current.next;
            index--;
        }
        return current;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.length, val);
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) {
            return;
        }
        const previous = this.getNodeAt(index - 1);
        const newNode = new LinkedListNode(val, previous.next);
        previous.next = newNode;
        this.length++;
    }

    deleteAtIndex(index: number): void {

        if (index < 0 || index >= this.length) {
            return;
        }

        const previous = this.getNodeAt(index - 1);

        previous.next = previous.next.next;

        this.length--;
    }
}

class LinkedListNode {
    value: number;
    next: LinkedListNode;
    constructor(value: number, next?: LinkedListNode) {
        this.value = value;
        this.next = next ?? this;
    }
}