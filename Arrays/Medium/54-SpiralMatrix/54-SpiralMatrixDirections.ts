/**
 * Medium
 * https://leetcode.com/problems/spiral-matrix/
 */
function spiralOrder(matrix: number[][]): number[] {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const spiral: number[] = [];
	let count = rowCount * columnCount;
	let row = 0;
	let column = 0;
	const rowMovments = [0, 1, 0, -1];
	const columnMovments = [1, 0, -1, 0];
	let direction = 0;
	let spiralNumber = 0;
	let rowStart = 0;
	let columnstart = 0;
	while (count) {
		spiral.push(matrix[row][column]);
		const nextRow = row + rowMovments[direction];
		const nextColumn = column + columnMovments[direction];
		const rowEnded = isOutOfBound(
			nextRow,
			spiralNumber,
			rowCount - spiralNumber - 1
		);
		const columnEnded = isOutOfBound(
			nextColumn,
			spiralNumber,
			columnCount - spiralNumber - 1
		);
		const spiralEnded = nextRow === rowStart && nextColumn === columnstart;
		if (rowEnded || columnEnded || spiralEnded) {
			direction = (direction + 1) % 4;
		}

		row += rowMovments[direction];
		column += columnMovments[direction];

		if (spiralEnded) {
			rowStart = row;
			columnstart = column;
			spiralNumber++;
		}

		count--;
	}
	return spiral;
}

function isOutOfBound(index: number, start: number, end: number) {
	return index < start || index > end;
}
