/**
 * Medium
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 */
function kthGrammar(n: number, k: number): number {
	let isInverse = false;
	// Number of elements in the row.
	n = 1 << (n - 1);
	// Loop unitl we reach the first row, which has only one element (0)
	while (n != 1) {
		// Get half of the number of elements in the row.
		n >>>= 1;
		/**
		 * If k is in the second half of the row,
		 * its value is the inverse of the value
		 * at the same position in the first half,
		 * So, we subtract half of the number of elements
		 * in the row from k and invert the value of isInverse.
		 */
		if (k > n) {
			k -= n;
			isInverse = !isInverse;
		}
	}
	/**
	 * If isInverse is true, we need to invert
	 * the value of the first element in the first row
	 * which is 0, so we return 1, otherwise we return 0.
	 */
	return isInverse ? 1 : 0;
}
