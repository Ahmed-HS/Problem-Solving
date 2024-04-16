/**
 * Easy
 * https://leetcode.com/problems/same-tree/
 */
function isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
	const toVisit = [[root1, root2]];
	while (toVisit.length) {
		const [tree1, tree2] = toVisit.pop();
		if (!tree1 && !tree2) continue;
		if (!tree1 || !tree2) return false;
		if (tree1.val !== tree2.val) return false;
		toVisit.push([tree1.left, tree2.left]);
		toVisit.push([tree1.right, tree2.right]);
	}
	return true;
}
