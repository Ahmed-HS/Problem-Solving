/**
 * Easy
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */
class KthLargest {
	private k: number;
	private kLargestNumbers: MyPriorityQueue;
	constructor(k: number, numbers: number[]) {
		// Create a priority queue that contains the k largest numbers.
		this.k = k;
		this.kLargestNumbers = new MyPriorityQueue(numbers);
		// Remove the smallest numbers from the priority queue if it exceeds k.
		while (this.kLargestNumbers.size > k) {
			this.kLargestNumbers.pop();
		}
	}

	add(val: number): number {
		/**
		 * If the priority queue has fewer than k elements, insert the new number.
		 * If the new number is larger than the smallest number in the priority queue,
		 * replace the smallest number with the new number.
		 */
		if (this.kLargestNumbers.size < this.k) {
			this.kLargestNumbers.insert(val);
		} else if (val > this.kLargestNumbers.peek()) {
			this.kLargestNumbers.pop();
			this.kLargestNumbers.insert(val);
		}
		/**
		 * Return the kth largest number which is the smallest number
		 * in the priority queue of k largest numbers.
		 */
		return this.kLargestNumbers.peek();
	}
}

class MyPriorityQueue {
	private heap: number[] = [];

	constructor(numbers: number[]) {
		this.heap = [...numbers];
		const lastParentIndex = this.getParent(this.heap.length - 1);
		for (let i = lastParentIndex; i >= 0; i--) {
			this.heapifyDown(i);
		}
	}

	private heapifyUp(): void {
		let index = this.heap.length - 1;
		while (
			this.hasParent(index) &&
			this.heap[index] < this.heap[this.getParent(index)]
		) {
			const parentIndex = this.getParent(index);
			this.swap(index, parentIndex);
			index = parentIndex;
		}
	}

	private heapifyDown(parent: number): void {
		while (this.hasLeftChild(parent)) {
			let smallest = this.getLeftChild(parent);
			if (
				this.hasRightChild(parent) &&
				this.heap[this.getRightChild(parent)] < this.heap[smallest]
			) {
				smallest = this.getRightChild(parent);
			}
			if (this.heap[smallest] >= this.heap[parent]) {
				break;
			}
			this.swap(parent, smallest);
			parent = smallest;
		}
	}

	insert(value: number): void {
		this.heap.push(value);
		this.heapifyUp();
	}

	pop(): number {
		this.swap(0, this.heap.length - 1);
		const value = this.heap.pop();
		this.heapifyDown(0);
		return value;
	}

	peek(): number {
		return this.heap[0];
	}

	get size(): number {
		return this.heap.length;
	}

	private getLeftChild(parent: number): number {
		return parent * 2 + 1;
	}

	private getRightChild(parent: number): number {
		return parent * 2 + 2;
	}

	private getParent(child: number): number {
		return Math.trunc((child - 1) / 2);
	}

	private hasLeftChild(parent: number): boolean {
		return this.getLeftChild(parent) < this.heap.length;
	}

	private hasParent(child: number): boolean {
		return this.getParent(child) >= 0;
	}

	private hasRightChild(parent: number): boolean {
		return this.getRightChild(parent) < this.heap.length;
	}

	private swap(index1: number, index2: number): void {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}
}
