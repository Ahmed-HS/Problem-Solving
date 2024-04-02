/**
 * Easy
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
function getRow(rowIndex: number): number[] {
	if (rowIndex === 0) return [1];
	const currentRow = [1]; // Every row starts with 1
	const previousRow = getRow(rowIndex - 1);
	// Fill the current row based on previous row
	for (let i = 1; i < rowIndex; i++) {
		currentRow.push(previousRow[i - 1] + previousRow[i]);
	}
	currentRow.push(1); // Every row ends with 1
	return currentRow;
}
