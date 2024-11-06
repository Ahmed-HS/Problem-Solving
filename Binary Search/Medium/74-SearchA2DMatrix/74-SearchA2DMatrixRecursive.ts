/**
 * Medium
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
function searchMatrix(matrix: number[][], target: number): boolean {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	let start = 0;
	let end = rowCount * columnCount - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const row = Math.trunc(mid / columnCount);
		const column = mid % columnCount;
		const midValue = matrix[row][column];
		if (midValue === target) return true;
		if (midValue < target) start = mid + 1;
		else end = mid - 1;
	}
	return false;
}
