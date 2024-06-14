/**
 * Easy
 * https://leetcode.com/problems/n-th-tribonacci-number/
 */
function tribonacci(n: number): number {
	const result = new Array(n + 1);
	result[0] = 0;
	result[1] = 1;
	result[2] = 1;
	for (let i = 3; i <= n; i++) {
		result[i] = result[i - 1] + result[i - 2] + result[i - 3];
	}
	return result[n];
}
