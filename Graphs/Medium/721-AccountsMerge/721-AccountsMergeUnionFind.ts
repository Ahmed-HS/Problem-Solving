/**
 * Medium
 * https://leetcode.com/problems/accounts-merge/
 */
function accountsMerge(accounts: string[][]): string[][] {
	const emailUnion = new UnionFind(accounts.length);
	const emailToAccount = new Map<string, number>();
	for (let i = 0; i < accounts.length; i++) {
		for (let j = 1; j < accounts[i].length; j++) {
			const email = accounts[i][j];
			if (emailToAccount.has(email)) {
				emailUnion.union(i, emailToAccount.get(email)!);
			} else {
				emailToAccount.set(email, i);
			}
		}
	}
	const accountEmails = new Map<number, string[]>();
	for (const [email, account] of emailToAccount) {
		const root = emailUnion.find(account);
		if (!accountEmails.has(root)) {
			accountEmails.set(root, []);
		}
		accountEmails.get(root).push(email);
	}
	const people = [];
	for (const [i, emails] of accountEmails) {
		people.push([accounts[i][0], ...emails.sort()]);
	}
	return people;
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
