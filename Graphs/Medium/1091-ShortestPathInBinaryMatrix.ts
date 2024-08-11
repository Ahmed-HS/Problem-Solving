/**
 * Medium
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	if (grid[0][0] === 1 || grid[rowCount - 1][columnCount - 1] === 1)
		return -1;
	const directions = [
		[0, 1],
		[1, 0],
		[1, 1],
		[1, -1],
		[-1, 0],
		[0, -1],
		[-1, -1],
		[-1, 1],
	];
	const toVisit = [[0, 0]];
	grid[0][0] = 1;
	let pathLength = 0;
	while (toVisit.length) {
		pathLength++;
		let levelLength = toVisit.length;
		while (levelLength--) {
			const [row, column] = toVisit.shift();
			if (row === rowCount - 1 && column === columnCount - 1)
				return pathLength;
			for (const [rowDiff, columnDiff] of directions) {
				const newRow = row + rowDiff;
				const newColumn = column + columnDiff;
				if (
					newRow < 0 ||
					newRow >= rowCount ||
					newColumn < 0 ||
					newColumn >= columnCount ||
					grid[newRow][newColumn] === 1
				)
					continue;
				grid[newRow][newColumn] = 1;
				toVisit.push([newRow, newColumn]);
			}
		}
	}
	return -1;
}
