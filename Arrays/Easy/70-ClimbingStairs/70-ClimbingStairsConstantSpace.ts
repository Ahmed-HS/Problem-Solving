/**
 * Easy
 * https://leetcode.com/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
	let last = 1;
	let previous = 1;
	let current = n;
	for (let i = 2; i <= n; i++) {
		current = previous + last;
		last = previous;
		previous = current;
	}
	return current;
}
