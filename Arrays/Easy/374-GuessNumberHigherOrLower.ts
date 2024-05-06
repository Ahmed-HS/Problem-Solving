/**
 * Easy
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 */
function guessNumber(n: number): number {
	let start = 1;
	let end = n;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const guessResult = guess(mid);
		if (guessResult === 0) return mid;
		if (guessResult === -1) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return end;
}
