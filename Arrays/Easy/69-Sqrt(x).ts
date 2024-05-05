/**
 * Easy
 * https://leetcode.com/problems/sqrtx/
 */
function mySqrt(x: number): number {
	let start = 0;
	let end = x;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const square = mid * mid;
		if (square === x) return mid;
		if (square < x) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return end;
}
