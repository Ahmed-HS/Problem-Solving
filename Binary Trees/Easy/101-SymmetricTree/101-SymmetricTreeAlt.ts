/**
 * Easy
 * https://leetcode.com/problems/symmetric-tree/
 */
function isSymmetric(root: TreeNode | null): boolean {
	const toVisit = [root];
	while (toVisit.length) {
		const size = toVisit.length;
		/**
		 * If the tree is symmetric, each level will have a mirrored structure,
		 * the reverse of each level will be equal to the original level.
		 */
		for (let i = 0; i < size; i++) {
			if (
				i < size / 2 &&
				toVisit[0]?.val !== toVisit[size - 2 * i - 1]?.val
			) {
				return false;
			}
			const node = toVisit.shift();
			if (!node) continue;
			const children = [node.left, node.right];
			toVisit.push(...children);
		}
	}
	return true;
}
