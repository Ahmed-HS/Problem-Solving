/**
 * Easy
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */
function preorderTraversal(root: TreeNode | null): number[] {
	const toVisit = [root].filter((node) => node !== null);
	const values = [];
	while (toVisit.length) {
		const node = toVisit.pop();
		values.push(node.val);
		const children = [node.right, node.left].filter(
			(node) => node !== null
		);
		toVisit.push(...children);
	}
	return values;
}
