/**
 * Medium
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */
class WordDictionary {
	private trie: Trie;
	constructor() {
		this.trie = new Trie();
	}

	addWord(word: string): void {
		this.trie.insert(word);
	}

	search(word: string): boolean {
		return this.trie.search(word);
	}
}

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
		const toVisit: TrieNode[] = this.root ? [this.root] : [];
		for (const letter of word) {
			const length = toVisit.length;
			if (length === 0) return false;
			for (let i = 0; i < length; i++) {
				const current = toVisit.shift();
				if (letter === ".") {
					toVisit.push(...current.getChildren());
				} else if (current.getChild(letter)) {
					toVisit.push(current.getChild(letter));
				}
			}
		}
		return toVisit.some((node) => node.isWord);
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
	getChildren(): TrieNode[] {
		return [...this.children.values()];
	}
}
