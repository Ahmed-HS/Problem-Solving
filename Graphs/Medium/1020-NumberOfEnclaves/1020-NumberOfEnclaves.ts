/**
 * Medium
 * https://leetcode.com/problems/number-of-enclaves/
 */
function numEnclaves(grid: number[][]): number {
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	function visitIsland(row: number, column: number) {
		if (
			row < 0 ||
			row >= rowCount ||
			column < 0 ||
			column >= columnCount ||
			grid[row][column] === 0
		) {
			return;
		}
		grid[row][column] = 0;
		for (const [rowDirection, columnDirection] of directions) {
			visitIsland(row + rowDirection, column + columnDirection);
		}
	}
	for (let i = 0; i < rowCount; i++) {
		visitIsland(i, 0);
		visitIsland(i, columnCount - 1);
	}
	for (let i = 0; i < columnCount; i++) {
		visitIsland(0, i);
		visitIsland(rowCount - 1, i);
	}
	let isolatedCount = 0;
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			isolatedCount += grid[i][j] === 1 ? 1 : 0;
		}
	}
	return isolatedCount;
}
