/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	/**
	 * The first element in the preorder array is the root of the tree,
	 * and the elements after the root in the preorder array are the left
	 * subtrees of the root, followed by the right subtrees.
	 * As we move forwards in the preorder array, we are going down the tree
	 * to the left, then back to the right.
	 * At each step, we pop the first element from the preorder array and create
	 * a node with that value.
	 * Then we keep recursing to create the left subtree
	 * until the value of the last node we created is
	 * equal to the value at the next pointer in the inorder array.
	 * This means that the left subtree of the current node is complete,
	 * as the inorder array is visited in the order left -> root -> right.
	 * so the first element in the inorder array is the leftmost node.
	 * We then move to the right subtree of the current node.
	 */
	let currentRoot = 0;
	let next = 0;

	function build(stop?: number): TreeNode | null {
		if (next === inorder.length || inorder[next] === stop) return null;
		const root = new TreeNode(preorder[currentRoot]);
		currentRoot++;
		root.left = build(root.val);
		next++;
		root.right = build(stop);
		return root;
	}

	return build();
}
