/**
 * Medium
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 */
function kthGrammar(n: number, k: number): number {
	/**
	 * We can represent the elements of the row as a binary tree
	 * where the root is 0 and each element has two children,
	 * the left child is the element itself and the right child
	 * is the inverse of the element.
	 * If k is even, the element is at the right child of its parent,
	 * otherwise it is at the left child.
	 * The parent of the element at position k is at position k / 2
	 * for even k and (k + 1) / 2 for odd k.
	 */
	if (n == 1) return 0;
	// If k is even, get the inverse of its parent (1 - 0 = 1, 1 - 1 = 0)
	if (k % 2 == 0) return 1 - kthGrammar(n - 1, k / 2);
	// If k is odd, get the value of its parent.
	return kthGrammar(n - 1, (k + 1) / 2);
}
