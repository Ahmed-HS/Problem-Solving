/**
 * Easy
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */
function postorderTraversal(root: TreeNode | null): number[] {
	const values = [];
	const toVisit = [[root, false]];
	while (toVisit.length > 0) {
		const [node, visited] = toVisit.pop();
		if (!node) continue;
		if (visited) {
			values.push(node.val);
			continue;
		}
		toVisit.push([node, true]);
		toVisit.push([node.right, false]);
		toVisit.push([node.left, false]);
	}
	return values;
}
