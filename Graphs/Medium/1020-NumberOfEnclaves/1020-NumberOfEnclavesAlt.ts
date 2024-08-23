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
			return [0, false];
		}
		grid[row][column] = 0;
		let canReachBoundary =
			row === 0 ||
			row === rowCount - 1 ||
			column === 0 ||
			column === columnCount - 1;
		let islandSize = 1;
		for (const [rowDirection, columnDirection] of directions) {
			const [nextSize, nextReach] = visitIsland(
				row + rowDirection,
				column + columnDirection
			);
			islandSize += +nextSize;
			canReachBoundary ||= !!nextReach;
		}
		return [islandSize, canReachBoundary];
	}
	let isolatedCount = 0;
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			if (grid[i][j] === 1) {
				const [islandSize, canReachBoundary] = visitIsland(i, j);
				isolatedCount += !canReachBoundary ? +islandSize : 0;
			}
		}
	}
	return isolatedCount;
}
