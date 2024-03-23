/**
 * Easy
 * https://leetcode.com/problems/symmetric-tree/
 */
function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return true;
	const stack = [[root.left, root.right]];
	/**
	 * Divide the tree into two halves,
	 * and compare the left of the first half
	 * with the right of the second half and
	 * the right of the first half with the
	 * left of the second half.
	 */
	while (stack.length) {
		const [root1, root2] = stack.pop();
		if (!root1 && !root2) {
			continue;
		}
		// If only one of the two subtrees is null or their values are not equal, return false.
		if (!root1 || !root2 || root1.val !== root2.val) {
			return false;
		}
		stack.push([root1.left, root2.right]);
		stack.push([root1.right, root2.left]);
	}
	return true;
}
