/**
 * Easy
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */
class MyQueue {
	// The input stack acts as a buffer for holding new elements.
	private input = [];
	// The output stack always holds the elements in reverse order.
	private output = [];

	push(x: number): void {
		this.input.push(x);
	}

	pop(): number {
		const top = this.peek();
		this.output.pop();
		return top;
	}

	peek(): number {
		// If the output stack is not empty, the front element is the top element of the output stack.
		if (this.output.length) {
			return this.output[this.output.length - 1];
		}
		/**
		 * If the output stack is empty, move all elements
		 * from the input stack to the output stack.
		 * This reverses the order of the elements,
		 * so the front element becomes the top element of the output stack.
		 */
		while (this.input.length) {
			this.output.push(this.input.pop());
		}
		// Return the front element.
		return this.output[this.output.length - 1];
	}

	empty(): boolean {
		// The queue is empty if both the input stack and the output stack are empty.
		return this.input.length === 0 && this.output.length === 0;
	}
}
