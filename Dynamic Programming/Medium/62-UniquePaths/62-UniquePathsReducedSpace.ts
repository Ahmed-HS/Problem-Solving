/**
 * Medium
 * https://leetcode.com/problems/unique-paths/
 */
function uniquePaths(rows: number, columns: number): number {
	const waysCount = new Array(columns).fill(1);
	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < columns; j++) {
			waysCount[j] = waysCount[j - 1] + waysCount[j];
		}
	}
	return waysCount[columns - 1];
}
