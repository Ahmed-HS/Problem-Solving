/**
 * Medium
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */
class Trie {
	private root: TrieNode;
	constructor() {
		this.root = new TrieNode();
	}

	insert(word: string): void {
		let current = this.root;
		for (const letter of word) {
			current = current.createOrGetChild(letter);
		}
		current.isWord = true;
	}

	search(word: string): boolean {
		return this.getNodeWithPrefix(word)?.isWord ?? false;
	}

	startsWith(prefix: string): boolean {
		return this.getNodeWithPrefix(prefix) !== null;
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
	isWord: boolean;
	constructor() {
		this.isWord = false;
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
}
