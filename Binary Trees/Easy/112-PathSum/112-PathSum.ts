/**
 * Easy
 * https://leetcode.com/problems/path-sum/
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	const toVisit = [[root, root?.val]].filter((node) => node[0] !== null) as [
		TreeNode,
		number
	][];
	while (toVisit.length) {
		const [current, sum] = toVisit.pop();
		if (!current.left && !current.right && sum === targetSum) {
			return true;
		}
		const children = [current.right, current.left]
			.filter((node) => node !== null)
			.map((node) => [node, sum + node.val]) as [TreeNode, number][];
		toVisit.push(...children);
	}
	return false;
}
