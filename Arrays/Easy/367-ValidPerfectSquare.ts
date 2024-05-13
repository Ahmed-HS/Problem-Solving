/**
 * Easy
 * https://leetcode.com/problems/valid-perfect-square/
 */
function isPerfectSquare(number: number): boolean {
	let start = 0;
	let end = number;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const square = mid * mid;
		if (square === number) return true;
		if (square < number) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return false;
}
