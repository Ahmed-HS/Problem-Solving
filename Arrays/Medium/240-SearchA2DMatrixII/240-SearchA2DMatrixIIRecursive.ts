/**
 * Medium
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 */
function searchMatrix(matrix: number[][], target: number): boolean {
	/**
	 * Each row and column of the matrix is sorted in ascending order.
	 * We can get the middle element of the matrix and compare it with the target.
	 * If the middle element is equal to the target, we return true.
	 * If the middle element is greater than the target, we search the left and top
	 * submatrices and discard the bottom right submatrix.
	 * If the middle element is less than the target, we search the right and bottom
	 * submatrices and discard the top left submatrix.
	 * If the rowStart is greater than the rowEnd or the columnStart is greater
	 * than the columnEnd, then there is no elements in the submatrix and we return false.
	 */
	function search(
		rowStart: number,
		rowEnd: number,
		columnStart: number,
		columnEnd: number
	) {
		if (rowStart > rowEnd || columnStart > columnEnd) return false;
		const rowMidpoint = rowStart + Math.trunc((rowEnd - rowStart) / 2);
		const columnMidPoint =
			columnStart + Math.trunc((columnEnd - columnStart) / 2);
		if (matrix[rowMidpoint][columnMidPoint] === target) return true;
		let result = false;
		if (matrix[rowMidpoint][columnMidPoint] > target) {
			result =
				search(rowStart, rowEnd, columnStart, columnMidPoint - 1) ||
				search(rowStart, rowMidpoint - 1, columnStart, columnEnd);
		} else {
			result =
				search(rowStart, rowEnd, columnMidPoint + 1, columnEnd) ||
				search(rowMidpoint + 1, rowEnd, columnStart, columnEnd);
		}
		return result;
	}
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	return search(0, rowCount - 1, 0, columnCount - 1);
}
