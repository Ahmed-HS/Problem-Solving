/**
 * Medium
 * https://leetcode.com/problems/shortest-bridge/
 */
function shortestBridge(grid: number[][]): number {
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	function markIslandTwo(row: number, column: number) {
		if (
			row < 0 ||
			row >= rowCount ||
			column < 0 ||
			column >= columnCount ||
			grid[row][column] === 2 ||
			grid[row][column] === 0
		) {
			return [];
		}
		grid[row][column] = 2;
		const cells = [[row, column]];
		for (const [rowDirection, columnDirection] of directions) {
			const next = markIslandTwo(
				row + rowDirection,
				column + columnDirection
			);
			cells.push(...next);
		}
		return cells;
	}

	function bfs(toVisit: number[][]) {
		let steps = 0;
		while (toVisit.length) {
			let levelLength = toVisit.length;
			while (levelLength--) {
				const [row, column] = toVisit.shift();
				for (const [rowDirection, columnDirection] of directions) {
					const newRow = row + rowDirection;
					const newColumn = column + columnDirection;
					if (
						newRow < 0 ||
						newRow >= rowCount ||
						newColumn < 0 ||
						newColumn >= columnCount ||
						grid[newRow][newColumn] === 3
					) {
						continue;
					}
					if (grid[newRow][newColumn] === 1) {
						return steps;
					}
					grid[newRow][newColumn] = 3;
					toVisit.push([newRow, newColumn]);
				}
			}
			steps++;
		}
		return -1;
	}
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			if (grid[i][j] === 1) {
				const islandTwo = markIslandTwo(i, j);
				return bfs(islandTwo);
			}
		}
	}
	return -1;
}
