/**
 * Medium
 * https://leetcode.com/problems/max-area-of-island/
 */
function maxAreaOfIsland(grid: number[][]): number {
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
			return 0;
		}
		grid[row][column] = 0;
		let islandSize = 1;
		for (const [rowDirection, columnDirection] of directions) {
			islandSize += visitIsland(
				row + rowDirection,
				column + columnDirection
			);
		}
		return islandSize;
	}
	let maxIslandSize = 0;
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			if (grid[i][j] === 1) {
				maxIslandSize = Math.max(maxIslandSize, visitIsland(i, j));
			}
		}
	}
	return maxIslandSize;
}
