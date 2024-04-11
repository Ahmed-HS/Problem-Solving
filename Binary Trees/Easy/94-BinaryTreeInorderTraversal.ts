/**
 * Easy
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
function inorderTraversal(root: TreeNode | null): number[] {
	const numbers = [];
	// Create a stack to store the nodes to visit.
	const toVisit = [];
	// Start with the root of the tree.
	let current = root;
	// While there are left nodes to visit or the right subtree is not empty.
	while (toVisit.length || current) {
		// Go to the leftmost node of the current subtree.
		while (current) {
			toVisit.push(current);
			current = current.left;
		}
		// Get the leftmost node from the stack.
		current = toVisit.pop();
		// Add the value of the leftmost node to the result array.
		numbers.push(current.val);
		// Go to the right subtree.
		current = current.right;
	}
	return numbers;
}
