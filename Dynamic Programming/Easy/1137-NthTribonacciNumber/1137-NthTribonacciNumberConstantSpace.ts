/**
 * Easy
 * https://leetcode.com/problems/n-th-tribonacci-number/
 */
function tribonacci(n: number): number {
	if (n === 0) return 0;
	let third = 0;
	let second = 1;
	let first = 1;
	for (let i = 3; i <= n; i++) {
		const newFirst = first + second + third;
		third = second;
		second = first;
		first = newFirst;
	}
	return first;
}
