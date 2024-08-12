/**
 * Hard
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */
function maxPathSum(root: TreeNode | null): number {
	let maximumPathSum = -Infinity;
	function calculateMaximumPathSum(root: TreeNode | null): number {
		// Base case: if the root is null, return 0
		if (root === null) return 0;

		// Recursively calculate the maximum path sums for the left and right subtrees
		const leftSubtreeSum = calculateMaximumPathSum(root.left);
		const rightSubtreeSum = calculateMaximumPathSum(root.right);

		// Determine the maximum path sum that includes the root node
		const maxSubtreeSum = Math.max(leftSubtreeSum, rightSubtreeSum);
		const maxSingleNodeSum = Math.max(root.val, root.val + maxSubtreeSum);
		const maxCompletePathSum = Math.max(
			maxSingleNodeSum,
			leftSubtreeSum + rightSubtreeSum + root.val
		);

		// Update the maximum path sum found so far
		maximumPathSum = Math.max(maximumPathSum, maxCompletePathSum);

		// Return the maximum path sum including the root node as part of the path
		return maxSingleNodeSum;
	}
	calculateMaximumPathSum(root);
	return maximumPathSum;
}
