/**
 * Easy
 * https://leetcode.com/problems/arranging-coins/
 */
function arrangeCoins(n: number): number {
	let start = 0;
	let end = n;
	while (start <= end) {
		const rowCount = start + Math.trunc((end - start) / 2);
		const rowSum = (rowCount * (rowCount + 1)) / 2;
		if (rowSum === n) return rowCount;
		if (rowSum < n) {
			start = rowCount + 1;
		} else {
			end = rowCount - 1;
		}
	}
	return end;
}
