/**
 * Medium
 * https://leetcode.com/problems/design-linked-list/
 * Doubly linked list
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
        if (this.head.next) {
            this.head.next.previous = this.head;
        }
    }

    addAtTail(val: number): void {
        this.length++;
        const newNode = new LinkedListNode(val, undefined, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
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

        const targetNode = this.getNodeAt(index);

        if (!targetNode) {
            return;
        }

        this.length++;

        const newNode = new LinkedListNode(val, targetNode, targetNode.previous);

        targetNode.previous!.next = newNode;
        targetNode.previous = newNode;
    }

    deleteAtHead(): void {

        if (!this.head) {
            return;
        }

        this.length--;
        this.head = this.head.next;

        if (this.head) {
            this.head.previous = undefined;
        } else {
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

        const targetNode = this.getNodeAt(index);

        if (!targetNode) {
            return;
        }

        if (index === this.length - 1) {
            this.tail = targetNode.previous;
        }

        targetNode.previous!.next = targetNode.next;

        if (targetNode.next) {
            targetNode.next.previous = targetNode.previous;
        }

        this.length--;
    }
}

class LinkedListNode {
    value: number;
    next?: LinkedListNode;
    previous?: LinkedListNode;
    constructor(value: number, next?: LinkedListNode, previous?: LinkedListNode) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}