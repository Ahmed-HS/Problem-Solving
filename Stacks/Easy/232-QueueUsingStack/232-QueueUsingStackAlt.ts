/**
 * Easy
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */
class MyQueue {
	private numbers: number[] = [];
	push(x: number): void {
		const reverse = [];
		while (this.numbers.length) {
			reverse.push(this.numbers.pop());
		}
		this.numbers.push(x);
		while (reverse.length) {
			this.numbers.push(reverse.pop());
		}
	}
	pop(): number {
		return this.numbers.pop();
	}

	peek(): number {
		return this.numbers[this.numbers.length - 1];
	}
	empty(): boolean {
		return this.numbers.length === 0;
	}
}
