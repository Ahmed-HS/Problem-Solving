/**
 * Easy
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
function getRow(rowIndex: number): number[] {
	// https://leetcode.com/problems/pascals-triangle-ii/solutions/4173164/100-easy-optimized/
	const row = [1];
	for (let i = 1; i <= rowIndex; i++) {
		row.push((row[i - 1] * (rowIndex - i + 1)) / i);
	}
	return row;
}
