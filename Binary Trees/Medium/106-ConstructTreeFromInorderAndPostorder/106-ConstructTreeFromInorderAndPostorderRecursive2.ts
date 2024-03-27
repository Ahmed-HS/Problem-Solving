/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	/**
	 * The last element in the postorder array is the root of the tree,
	 * and the elements before the root in the postorder array are the right
	 * subtrees of the root, followed by the left subtrees.
	 * As we move backwards in the postorder array, we are going down the tree
	 * to the right, then back to the left.
	 * At each step, we pop the last element from the postorder array and create
	 * a node with that value.
	 * Then we keep recursing to create the right subtree
	 * until the value of the last node we created is
	 * equal to the value at the next pointer in the inorder array.
	 * This means that the right subtree of the current node is complete,
	 * as the reverse of inorder array is visited in the order right -> root -> left.
	 * so the last element in the inorder array is the rightmost node.
	 * We then move to the left subtree of the current node.
	 */
	let currentRoot = postorder.length - 1;
	let next = inorder.length - 1;

	function build(stop?: number): TreeNode | null {
		if (next === inorder.length || inorder[next] === stop) return null;
		const root = new TreeNode(postorder[currentRoot]);
		currentRoot--;
		root.right = build(root.val);
		next--;
		root.left = build(stop);
		return root;
	}
	return build();
}
