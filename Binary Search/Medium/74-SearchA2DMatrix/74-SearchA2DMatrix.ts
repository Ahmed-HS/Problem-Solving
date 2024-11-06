/**
 * Medium
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
function searchMatrix(matrix: number[][], target: number): boolean {
	function search(
		startRow: number,
		endRow: number,
		startColumn: number,
		endColumn: number
	) {
		if (startRow > endRow || startColumn > endColumn) return false;
		const midRow = startRow + Math.trunc((endRow - startRow) / 2);
		const midColumn =
			startColumn + Math.trunc((endColumn - startColumn) / 2);
		if (matrix[midRow][midColumn] === target) return true;

		if (matrix[midRow][midColumn] < target) {
			return (
				search(midRow, endRow, midColumn + 1, endColumn) ||
				search(midRow + 1, endRow, startColumn, midColumn)
			);
		}
		return (
			search(startRow, midRow, startColumn, midColumn - 1) ||
			search(startRow, midRow - 1, midColumn, endColumn)
		);
	}
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	return search(0, rowCount - 1, 0, columnCount - 1);
}
