/**
 * Medium
 * https://leetcode.com/problems/minimum-path-sum/
 */
function minPathSum(grid: number[][]): number {
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	const minimumDistance = Array.from({ length: rowCount }, () =>
		new Array(columnCount).fill(undefined)
	);
	function findMinimumPathSum(row: number, column: number) {
		if (row === 0 && column === 0) return grid[0][0];
		if (row < 0 || column < 0) return Infinity;
		if (minimumDistance[row][column]) return minimumDistance[row][column];
		minimumDistance[row][column] =
			grid[row][column] +
			Math.min(
				findMinimumPathSum(row - 1, column),
				findMinimumPathSum(row, column - 1)
			);
		return minimumDistance[row][column];
	}
	return findMinimumPathSum(rowCount - 1, columnCount - 1);
}
