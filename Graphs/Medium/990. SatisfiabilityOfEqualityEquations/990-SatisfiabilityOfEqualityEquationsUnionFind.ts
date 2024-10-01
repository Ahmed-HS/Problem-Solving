/**
 * Medium
 * https://leetcode.com/problems/satisfiability-of-equality-equations/
 */
function equationsPossible(equations: string[]): boolean {
	const union = new UnionFind(26);
	const aCode = "a".charCodeAt(0);
	for (const equation of equations) {
		const var1Id = equation[0].charCodeAt(0) - aCode;
		const var2Id = equation[equation.length - 1].charCodeAt(0) - aCode;
		if (equation[1] === "=") {
			union.union(var1Id, var2Id);
		}
	}
	for (const equation of equations) {
		const var1Id = equation[0].charCodeAt(0) - aCode;
		const var2Id = equation[equation.length - 1].charCodeAt(0) - aCode;
		if (equation[1] === "!" && union.find(var1Id) === union.find(var2Id)) {
			return false;
		}
	}
	return true;
}

class UnionFind {
	private root: number[];
	private rank: number[];
	constructor(size: number) {
		this.root = new Array(size);
		this.rank = new Array(size);
		for (let i = 0; i < size; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
		}
	}

	public find(node: number) {
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
