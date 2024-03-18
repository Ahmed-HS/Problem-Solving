/**
 * Medium
 * https://leetcode.com/problems/01-matrix/
 */
function updateMatrix(mat: number[][]): number[][] {
	const rows = mat.length;
	const columns = mat[0].length;
	/**
	 * For each cell with a 1, we set the distance to the nearest 0
	 * by considering how the top and left cells reached 0 in previous
	 * iterations plus 1 for the step to reach the current cell.
	 */
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (mat[i][j] === 0) continue;
			const top = i > 0 ? mat[i - 1][j] : Infinity;
			const left = j > 0 ? mat[i][j - 1] : Infinity;
			mat[i][j] = Math.min(top, left) + 1;
		}
	}
	/**
	 * We then iterate from the bottom right cell to the top left cell,
	 * to consider reaching cells with 1s from the bottom and right
	 * cells, and update the distance to the nearest 0 by considering
	 * the minimum distance from the bottom and right cells plus 1 for
	 * the step to reach the current cell.
	 */
	for (let i = rows - 1; i >= 0; i--) {
		for (let j = columns - 1; j >= 0; j--) {
			if (mat[i][j] === 0) continue;
			const bottom = i < rows - 1 ? mat[i + 1][j] : Infinity;
			const right = j < columns - 1 ? mat[i][j + 1] : Infinity;
			mat[i][j] = Math.min(mat[i][j], Math.min(bottom, right) + 1);
		}
	}
	/**
	 * After the two passes, we should have considered all
	 * of the 4 directions to reach the nearest 0 for each cell with a 1.
	 */
	return mat;
}
