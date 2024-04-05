/**
 * Easy
 * https://leetcode.com/problems/fibonacci-number/
 */
function fib(n: number): number {
	let last = 0;
	let previous = 1;
	let current = n;
	for (let i = 2; i <= n; i++) {
		current = previous + last;
		last = previous;
		previous = current;
	}
	return current;
}
