/**
 * Medium
 * https://leetcode.com/problems/design-circular-queue/
 */
class MyCircularQueue {
	private queue: number[];
	private start = 0;
	private end = -1;
	private size = 0;
	constructor(k: number) {
		this.queue = new Array(k);
	}

	enQueue(value: number): boolean {
		if (this.isFull()) {
			return false;
		}
		this.end = (this.end + 1) % this.queue.length;
		this.queue[this.end] = value;
		this.size++;
		return true;
	}

	deQueue(): boolean {
		if (this.isEmpty()) {
			return false;
		}
		this.start = (this.start + 1) % this.queue.length;
		this.size--;
		return true;
	}

	Front(): number {
		return this.isEmpty() ? -1 : this.queue[this.start];
	}

	Rear(): number {
		return this.isEmpty() ? -1 : this.queue[this.end];
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	isFull(): boolean {
		return this.size === this.queue.length;
	}
}
