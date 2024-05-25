/**
 * Medium
 * https://leetcode.com/problems/binary-search-tree-iterator/
 */
class BSTIterator {
	private current: TreeNode | null;
	private toVisit: TreeNode[];
	constructor(root: TreeNode | null) {
		this.current = root;
		this.toVisit = [];
	}

	next(): number {
		while (this.current) {
			this.toVisit.push(this.current);
			this.current = this.current.left;
		}
		const left = this.toVisit.pop();
		this.current = left.right;
		return left.val;
	}
	hasNext(): boolean {
		return this.current !== null || this.toVisit.length !== 0;
	}
}
