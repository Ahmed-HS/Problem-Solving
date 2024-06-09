/**
 * Medium
 * https://leetcode.com/problems/replace-words/
 */
function replaceWords(dictionary: string[], sentence: string): string {
	const wordsTrie = new Trie(dictionary);
	const words = sentence.split(" ");
	const roots = words.map((word) => wordsTrie.getNearestWord(word));
	return roots.join(" ");
}

class Trie {
	private root: TrieNode;
	constructor(words: string[]) {
		this.root = new TrieNode();
		words.forEach((word) => this.insert(word));
	}

	insert(word: string): void {
		let current = this.root;
		for (const letter of word) {
			current = current.createOrGetChild(letter);
		}
		current.isWord = true;
	}

	getNearestWord(word: string): string {
		let current = this.root;
		for (let i = 0; i < word.length; i++) {
			current = current.createOrGetChild(word[i]);
			if (!current) return word;
			if (current.isWord) return word.slice(0, i + 1);
		}
		return word;
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
}
