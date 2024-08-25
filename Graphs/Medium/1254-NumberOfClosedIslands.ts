/**
 * Medium
 * https://leetcode.com/problems/number-of-closed-islands/
 */
function closedIsland(grid: number[][]): number {
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
			grid[row][column] === 1
		) {
			return;
		}
		grid[row][column] = 1;
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
	let closedCount = 0;
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			if (grid[i][j] === 0) {
				visitIsland(i, j);
				closedCount++;
			}
		}
	}
	return closedCount;
}
