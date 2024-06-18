/**
 * Medium
 * https://leetcode.com/problems/unique-paths/
 */
function uniquePaths(rows: number, columns: number): number {
	const waysCount = Array.from({ length: rows }, () =>
		new Array(columns).fill(undefined)
	);
	for (let i = 0; i < rows; i++) waysCount[i][0] = 1;
	for (let i = 0; i < columns; i++) waysCount[0][i] = 1;
	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < columns; j++) {
			waysCount[i][j] = waysCount[i - 1][j] + waysCount[i][j - 1];
		}
	}
	return waysCount[rows - 1][columns - 1];
}
