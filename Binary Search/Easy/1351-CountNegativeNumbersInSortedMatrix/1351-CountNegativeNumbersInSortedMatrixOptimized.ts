/**
 * Easy
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */
function countNegatives(grid: number[][]): number {
	let count = 0;
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	let row = 0;
	let column = columnCount - 1;
	while (row < rowCount && column >= 0) {
		if (grid[row][column] < 0) {
			count += rowCount - row;
			column--;
		} else {
			row++;
		}
	}
	return count;
}
