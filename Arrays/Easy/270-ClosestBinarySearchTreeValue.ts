/**
 * Easy
 * https://leetcode.com/problems/closest-binary-search-tree-value/
 */
function closestValue(root: TreeNode | null, target: number): number {
	let closest = root.val;
	while (root) {
		const currentDifference = Math.abs(target - root.val);
		const closestDifference = Math.abs(target - closest);
		if (currentDifference <= closestDifference) {
			closest = root.val;
		}
		/**
		 * If the target is l   ess than the current node's value,
		 * all the nodes in the right subtree are greater than the current node.
		 * So, searching the right subtree will always give a greater difference.
		 * Otherwise, the target is greater than the current node's value,
		 * all the nodes in the left subtree are less than the current node.
		 * So, searching the left subtree will always give a greater difference.
		 */
		root = target < root.val ? root.left : root.right;
	}
	return closest;
}
