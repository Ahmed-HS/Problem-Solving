/**
 * Medium
 * https://leetcode.com/problems/map-sum-pairs/
 */
class MapSum {
	private wordsTrie: Trie;
	constructor() {
		this.wordsTrie = new Trie();
	}

	insert(key: string, val: number): void {
		this.wordsTrie.insert(key, val);
	}

	sum(prefix: string): number {
		return this.wordsTrie.geValuesSumWithPrefix(prefix);
	}
}

class Trie {
	private root: TrieNode;
	constructor() {
		this.root = new TrieNode();
	}

	insert(word: string, value: number): void {
		let current = this.root;
		for (const letter of word) {
			current = current.createOrGetChild(letter);
		}
		current.value = value;
	}

	geValuesSumWithPrefix(prefix: string): number {
		let sum = 0;
		const root = this.getNodeWithPrefix(prefix);
		const toVisit = root ? [root] : [];
		while (toVisit.length) {
			const current = toVisit.pop();
			sum += current.value !== -1 ? current.value : 0;
			toVisit.push(...current.getChildren());
		}
		return sum;
	}

	private getNodeWithPrefix(prefix: string): TrieNode | null {
		let current = this.root;
		for (const letter of prefix) {
			current = current.getChild(letter);
			if (!current) return null;
		}
		return current;
	}
}

class TrieNode {
	private children: Map<string, TrieNode>;
	value: number;
	constructor() {
		this.value = -1;
		this.children = new Map<string, TrieNode>();
	}
	createOrGetChild(letter: string): TrieNode {
		const child = this.children.get(letter);
		if (!child) {
			const newChild = new TrieNode();
			this.children.set(letter, newChild);
			return newChild;
		}
		return child;
	}

	getChild(letter: string): TrieNode {
		return this.children.get(letter);
	}

	getChildren(): TrieNode[] {
		return [...this.children.values()];
	}
}
