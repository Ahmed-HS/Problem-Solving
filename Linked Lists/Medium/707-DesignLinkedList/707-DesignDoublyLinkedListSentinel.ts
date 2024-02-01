/**
 * Medium
 * https://leetcode.com/problems/design-linked-list/
 * Doubly linked list with sentinel node
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
        const targetNode = this.getNodeAt(index);
        const previous = targetNode.previous;
        const newNode = new LinkedListNode(val, targetNode, previous);
        targetNode.previous = newNode;
        previous.next = newNode;
        this.length++;
    }

    deleteAtIndex(index: number): void {

        if (index < 0 || index >= this.length) {
            return;
        }

        const targetNode = this.getNodeAt(index);

        const previous = targetNode.previous;
        previous.next = targetNode.next;

        const next = targetNode.next;
        next.previous = targetNode.previous;

        this.length--;
    }
}

class LinkedListNode {
    value: number;
    next: LinkedListNode;
    previous: LinkedListNode;
    constructor(value: number, next?: LinkedListNode, previous?: LinkedListNode) {
        this.value = value;
        this.next = next ?? this;
        this.previous = previous ?? this;
    }
}