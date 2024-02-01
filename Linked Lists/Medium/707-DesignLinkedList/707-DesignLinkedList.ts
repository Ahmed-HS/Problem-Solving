/**
 * Medium
 * https://leetcode.com/problems/design-linked-list/
 * Singly linked list
 */
class MyLinkedList {
    length = 0;
    head?: LinkedListNode;
    tail?: LinkedListNode;
    constructor() { }

    get(index: number): number {
        return this.getNodeAt(index)?.value ?? -1;
    }

    private getNodeAt(index: number): LinkedListNode | null {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current: LinkedListNode = this.head!;
        while (index > 0) {
            current = current.next!;
            index--;
        }
        return current;
    }

    addAtHead(val: number): void {
        this.length++;
        const newNode = new LinkedListNode(val, this.head);
        if (!this.head) {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    addAtTail(val: number): void {
        this.length++;
        const newNode = new LinkedListNode(val);
        if (!this.tail) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    addAtIndex(index: number, val: number): void {

        if (index === 0) {
            return this.addAtHead(val);
        }

        if (index === this.length) {
            return this.addAtTail(val);
        }

        const previousNode = this.getNodeAt(index - 1);

        if (!previousNode) {
            return;
        }

        this.length++;

        const newNode = new LinkedListNode(val);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }

    deleteAtHead(): void {

        if (!this.head) {
            return;
        }

        this.length--;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }
    }

    deleteAtIndex(index: number): void {

        if (index >= this.length) {
            return;
        }

        if (index === 0) {
            this.deleteAtHead();
            return;
        }

        const previousNode = this.getNodeAt(index - 1);

        if (!previousNode) {
            return;
        }

        if (index === this.length - 1) {
            this.tail = previousNode;
        }

        this.length--;

        previousNode.next = previousNode.next?.next;
    }
}

class LinkedListNode {
    value: number;
    next?: LinkedListNode;
    constructor(value: number, next?: LinkedListNode) {
        this.value = value;
        this.next = next;
    }
}