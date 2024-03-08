/**
 * Medium
 * https://leetcode.com/problems/min-stack/
 */
class MinStack {
	private stack = [];
	private minimumStack = [];
	push(val: number): void {
		this.stack.push(val);
		if (
			this.minimumStack.length === 0 ||
			val <= this.getLast(this.minimumStack)
		) {
			this.minimumStack.push(val);
		}
	}

	pop(): void {
		if (this.top() === this.getLast(this.minimumStack)) {
			this.minimumStack.pop();
		}
		this.stack.pop();
	}

	top(): number {
		return this.getLast(this.stack);
	}

	getMin(): number {
		return this.getLast(this.minimumStack);
	}

	private getLast(numbers: number[]) {
		return numbers[numbers.length - 1];
	}
}
