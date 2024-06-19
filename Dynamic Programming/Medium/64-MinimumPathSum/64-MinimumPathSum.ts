/**
 * Medium
 * https://leetcode.com/problems/minimum-path-sum/
 */
function minPathSum(grid: number[][]): number {
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	const minimumDistance = new Array(columnCount);
	minimumDistance[0] = grid[0][0];
	for (let i = 1; i < columnCount; i++) {
		minimumDistance[i] = grid[0][i] + minimumDistance[i - 1];
	}
	for (let i = 1; i < rowCount; i++) {
		minimumDistance[0] += grid[i][0];
		for (let j = 1; j < columnCount; j++) {
			minimumDistance[j] =
				grid[i][j] +
				Math.min(minimumDistance[j - 1], minimumDistance[j]);
		}
	}
	return minimumDistance[columnCount - 1];
}
