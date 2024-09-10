/**
 * Medium
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 */
function pacificAtlantic(heights: number[][]): number[][] {
	const rowCount = heights.length;
	const columnCount = heights[0].length;
	function visit(row: number, column: number, visitedSet: Set<number>) {
		const cellId = row * columnCount + column;
		if (visitedSet.has(cellId)) return;
		visitedSet.add(cellId);
		const directions = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		];
		for (const [rowDirection, columnDirection] of directions) {
			const newRow = row + rowDirection;
			const newColumn = column + columnDirection;
			if (
				newRow < 0 ||
				newColumn < 0 ||
				newRow >= rowCount ||
				newColumn >= columnCount
			)
				continue;
			if (heights[newRow][newColumn] < heights[row][column]) continue;
			visit(newRow, newColumn, visitedSet);
		}
	}
	const pacific = new Set<number>();
	const atlantic = new Set<number>();

	for (const row of heights.keys()) {
		visit(row, 0, pacific);
		visit(row, columnCount - 1, atlantic);
	}

	for (const column of heights[0].keys()) {
		visit(0, column, pacific);
		visit(rowCount - 1, column, atlantic);
	}

	const reachable = [];
	for (let row = 0; row < rowCount; row++) {
		for (let column = 0; column < columnCount; column++) {
			const cellId = row * columnCount + column;
			if (pacific.has(cellId) && atlantic.has(cellId)) {
				reachable.push([row, column]);
			}
		}
	}
	return reachable;
}
