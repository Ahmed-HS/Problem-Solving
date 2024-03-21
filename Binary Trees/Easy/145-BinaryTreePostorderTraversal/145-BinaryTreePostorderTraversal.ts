/**
 * Easy
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */
function postorderTraversal(root: TreeNode | null): number[] {
	const toVisit = [root].filter((node) => node !== null);
	const values = [];
	while (toVisit.length) {
		const node = toVisit.pop();
		values.push(node.val);
		const children = [node.left, node.right].filter(
			(node) => node !== null
		);
		toVisit.push(...children);
	}
	return values.reverse();
}
