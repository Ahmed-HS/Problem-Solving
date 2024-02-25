/**
 * Easy
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
function getRow(rowIndex: number): number[] {
	/**
	 * Generate a row of Pascal's Triangle given index its index.
	 * The idea is to use the previous row to generate the next row.
	 * We start with the first row, which is [1].
	 * Then we iterate from 1 to rowIndex.
	 * For each iteration, we iterate from the end of the row to the beginning.
	 * We set the current element of the new row
	 * to the sum of the current element itself (because it
	 * holds the value of the previous row at the same index) and
	 * the previous element of the previous row.
	 */
	const row: number[] = new Array(rowIndex + 1).fill(0);
	row[0] = 1;
	for (let i = 1; i <= rowIndex; i++) {
		for (let j = i; j > 0; j--) {
			row[j] = row[j] + row[j - 1];
		}
	}
	return row;
}
