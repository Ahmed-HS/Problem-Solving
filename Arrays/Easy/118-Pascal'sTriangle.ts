/**
 * Easy
 * https://leetcode.com/problems/pascals-triangle/
 */
function generate(numRows: number): number[][] {
	const pascalTriangle: number[][] = [[1]];
	for (let i = 1; i < numRows; i++) {
		pascalTriangle[i] = [];
		for (let j = 0; j < i + 1; j++) {
			const aboveLeft = pascalTriangle[i - 1][j - 1] ?? 0;
			const above = pascalTriangle[i - 1][j] ?? 0;
			pascalTriangle[i][j] = aboveLeft + above;
		}
	}
	return pascalTriangle;
}
