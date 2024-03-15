/**
 * Easy
 * https://leetcode.com/problems/implement-stack-using-queues/
 */
class MyStack {
	private numbers: number[] = [];
	push(x: number): void {
		const length = this.numbers.length;
		this.numbers.push(x);
		for (let i = 0; i < length; i++) {
			const front = this.numbers.shift();
			this.numbers.push(front);
		}
	}

	pop(): number {
		return this.numbers.shift();
	}

	top(): number {
		return this.numbers[0];
	}

	empty(): boolean {
		return this.numbers.length === 0;
	}
}
