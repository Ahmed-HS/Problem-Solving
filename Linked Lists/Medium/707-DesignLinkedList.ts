/**
 * Medium
 * https://leetcode.com/problems/design-linked-list/
 */
class MyLinkedList {
    length = 0;
    head?: LinkedListNode;
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
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.length, val);
    }

    addAtIndex(index: number, val: number): void {

        const previousNode = this.getNodeAt(index - 1);

        if (index !== 0 && !previousNode) {
            return;
        }

        this.length++;
        const newNode = new LinkedListNode(val);

        if (!previousNode) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }

    deleteAtIndex(index: number): void {

        if (index >= this.length) {
            return
        }

        const previousNode = this.getNodeAt(index - 1);

        if (index !== 0 && !previousNode) {
            return;
        }

        if (!previousNode) {
            this.head = this.head?.next
            return;
        } else {
            previousNode.next = previousNode.next?.next;
        }

        this.length--;
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