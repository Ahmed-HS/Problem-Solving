/**
 * Medium
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	let inorderPointer = 0;
	let preorderPointer = 0;
	const stack = [];
	let previous = null;
	const root = new TreeNode(preorder[preorderPointer]);
	stack.push(root);
	preorderPointer++;
	/**
	 * The root of the tree is the first element in the preorder array.
	 * the nodes are visited in the order root -> left -> right.
	 * The next element in the preorder array is the left child of
	 * the top node in the stack unless the top node value is equal to the
	 * inorder array value at inorderPointer.
	 * If the top node value is equal to the inorder array value at inorderPointer,
	 * it means that the top node has no left child and the next element in the
	 * preorder array is the right child of the top node.
	 */
	while (preorderPointer < preorder.length) {
		/**
		 * If the top node value is equal to the inorder array value at inorderPointer,
		 * it means we have already visited the left subtree of the top node.
		 * So we pop the top node from the stack and increment inorderPointer.
		 */
		while (
			stack.length &&
			stack[stack.length - 1].val === inorder[inorderPointer]
		) {
			previous = stack.pop();
			inorderPointer++;
		}
		const newNode = new TreeNode(preorder[preorderPointer]);
		/**
		 * If the previous node exists, it means the new node is the right child
		 * of the previous node as we have already visited the left subtree of the
		 * previous node. Otherwise, the new node is the left child of the top node.
		 */
		if (previous !== null) {
			previous.right = newNode;
		} else if (stack.length) {
			const top = stack[stack.length - 1];
			top.left = newNode;
		}
		stack.push(newNode);
		// Set previous node to null to continue moving in the left subtree.
		previous = null;
		preorderPointer++;
	}
	return root;
}
