/**
 * Medium
 * https://leetcode.com/problems/binary-search-tree-iterator/
 */
class BSTIterator {
	private nextPresent = false;
	private treeIterator: Generator<number, number, unknown>;
	constructor(root: TreeNode | null) {
		this.nextPresent = root !== null;
		this.treeIterator = this.iterator(root);
	}

	next(): number {
		const nextValue = this.treeIterator.next();
		this.nextPresent = !nextValue.done;
		return nextValue.value;
	}
	hasNext(): boolean {
		return this.nextPresent;
	}

	*iterator(root: TreeNode | null): Generator<number, number, unknown> {
		let current = root;
		const toVisit: TreeNode[] = [];
		while (toVisit.length || current) {
			while (current) {
				toVisit.push(current);
				current = current.left;
			}
			current = toVisit.pop();
			const nextPresent = toVisit.length !== 0 || current.right !== null;
			if (!nextPresent) return current.val;
			yield current.val;
			current = current.right;
		}
	}
}
