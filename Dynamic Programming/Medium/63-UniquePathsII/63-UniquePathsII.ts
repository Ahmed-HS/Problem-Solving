/**
 * Medium
 * https://leetcode.com/problems/unique-paths-ii/
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
	const rows = obstacleGrid.length;
	const columns = obstacleGrid[0].length;
	const waysCount = new Array(columns).fill(0);
	waysCount[0] = 1;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (obstacleGrid[i][j] === 1) {
				waysCount[j] = 0;
			} else {
				waysCount[j] += waysCount[j - 1] ?? 0;
			}
		}
	}
	return waysCount[columns - 1];
}
