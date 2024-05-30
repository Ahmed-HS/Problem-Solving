/**
 * Easy
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */
function sortedArrayToBST(numbers: number[]): TreeNode | null {
	if (numbers.length === 0) return null;

	const root = new TreeNode(0);

	const nodeStack: TreeNode[] = [root];
	const leftIndexStack: number[] = [0];
	const rightIndexStack: number[] = [numbers.length - 1];

	while (nodeStack.length) {
		// Current is the root of the current subtree.
		const current = nodeStack.pop();
		// Left and right determine the range of numbers used to create the current subtree.
		const left = leftIndexStack.pop();
		const right = rightIndexStack.pop();
		// Mid is the index of the number that will be the root of the current subtree.
		const mid = left + Math.floor((right - left) / 2);
		current.val = numbers[mid];
		/**
		 * If there are elements to the left of the mid, create a left child
		 * that will be the root of the left subtree which will use the
		 * range of numbers to the left of the mid (left to mid - 1).
		 */
		if (left < mid) {
			current.left = new TreeNode(0);
			nodeStack.push(current.left);
			leftIndexStack.push(left);
			rightIndexStack.push(mid - 1);
		}
		/**
		 * If there are elements to the right of the mid, create a right child
		 * that will be the root of the right subtree which will use the
		 * range of numbers to the right of the mid (mid + 1 to right).
		 */
		if (right > mid) {
			current.right = new TreeNode(0);
			nodeStack.push(current.right);
			leftIndexStack.push(mid + 1);
			rightIndexStack.push(right);
		}
	}

	return root;
}
