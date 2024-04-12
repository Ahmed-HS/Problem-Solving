/**
 * Medium
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 */
function searchMatrix(matrix: number[][], target: number): boolean {
	/**
	 * Each row and column of the matrix is sorted in ascending order.
	 * We can start from the top right corner of the matrix.
	 * If the current element is equal to the target, we return true.
	 * If the target is greater than the current element, we can
	 * discard the current row as all numbers to the left are smaller.
	 * If the target is less than the current element, we can
	 * discard the current column as all numbers below are greater.
	 */
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	let row = 0;
	let column = columnCount - 1;
	while (row < rowCount && column >= 0) {
		if (matrix[row][column] === target) return true;
		if (target > matrix[row][column]) {
			row++;
		} else {
			column--;
		}
	}
	return false;
}
