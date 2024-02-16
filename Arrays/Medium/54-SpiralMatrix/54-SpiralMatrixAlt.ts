/**
 * Medium
 * https://leetcode.com/problems/spiral-matrix/
 */
function spiralOrder(matrix: number[][]): number[] {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const spiral: number[] = [];
	let columnStart = 0;
	let columnEnd = columnCount - 1;
	let rowStart = 0;
	let rowEnd = rowCount - 1;

	while (columnStart <= columnEnd && rowStart <= rowEnd) {
		for (let i = columnStart; i <= columnEnd; i++) {
			spiral.push(matrix[rowStart][i]);
		}
		rowStart++;

		for (let i = rowStart; i <= rowEnd; i++) {
			spiral.push(matrix[i][columnEnd]);
		}
		columnEnd--;

		if (rowStart > rowEnd) {
			break;
		}
		for (let i = columnEnd; i >= columnStart; i--) {
			spiral.push(matrix[rowEnd][i]);
		}
		rowEnd--;

		if (columnStart > columnEnd) {
			break;
		}
		for (let i = rowEnd; i >= rowStart; i--) {
			spiral.push(matrix[i][columnStart]);
		}
		columnStart++;
	}

	return spiral;
}
