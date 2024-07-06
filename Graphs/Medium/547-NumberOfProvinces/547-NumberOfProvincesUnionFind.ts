/**
 * Medium
 * https://leetcode.com/problems/number-of-provinces/
 */
function findCircleNum(isConnected: number[][]): number {
	const nodeSet = new UnionFind(isConnected.length);
	let provinces = isConnected.length;
	for (let i = 1; i < isConnected.length; i++) {
		for (let j = 0; j < i; j++) {
			if (isConnected[i][j] && nodeSet.union(i, j)) {
				provinces--;
			}
		}
	}
	return provinces;
}

class UnionFind {
	private root: number[];
	private rank: number[];
	constructor(private size: number) {
		this.root = new Array(size);
		this.rank = new Array(size);
		for (let i = 0; i < size; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
		}
	}

	private find(node: number) {
		let current = node;
		while (current !== this.root[current]) {
			current = this.root[current];
		}
		const newRoot = current;
		current = node;
		while (current !== this.root[current]) {
			const oldRoot = this.root[current];
			this.root[current] = newRoot;
			current = oldRoot;
		}
		return newRoot;
	}

	public union(node1: number, node2: number) {
		const root1 = this.find(node1);
		const root2 = this.find(node2);
		if (root1 === root2) return false;
		if (this.rank[root1] > this.rank[root2]) {
			this.root[root2] = root1;
		} else if (this.rank[root1] < this.rank[root2]) {
			this.root[root1] = root2;
		} else {
			this.root[root1] = root2;
			this.rank[root1]++;
		}
		return true;
	}
}
