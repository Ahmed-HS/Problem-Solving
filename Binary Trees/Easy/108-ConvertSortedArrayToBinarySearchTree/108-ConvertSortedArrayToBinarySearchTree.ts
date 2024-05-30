/**
 * Easy
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */
function sortedArrayToBST(numbers: number[]): TreeNode | null {
	return convertToBST(0, numbers.length - 1, numbers);
}
function convertToBST(start: number, end: number, numbers: number[]) {
	if (start > end) return null;
	const mid = start + Math.trunc((end - start) / 2);
	const root = new TreeNode(numbers[mid]);
	root.left = convertToBST(start, mid - 1, numbers);
	root.right = convertToBST(mid + 1, end, numbers);
	return root;
}
