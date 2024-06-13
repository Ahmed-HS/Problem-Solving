/**
 * Hard
 * https://leetcode.com/problems/word-search-ii/
 */
function findWords(board: string[][], words: string[]): string[] {
	const rows = board.length;
	const columns = board[0].length;
	const wordsTrie = new Trie();
	const root = wordsTrie.getRoot();
	const foundWords = [];
	words.forEach((word) => wordsTrie.insert(word));
	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			const words = searchWords(board, row, column, root);
			foundWords.push(...words);
		}
	}
	return [...foundWords];
}

function searchWords(
	board: string[][],
	row: number,
	column: number,
	parent: TrieNode
): string[] {
	if (
		row < 0 ||
		row >= board.length ||
		column < 0 ||
		column >= board[0].length ||
		!parent.getChild(board[row][column])
	) {
		return [];
	}

	const foundWords = [];
	const letter = board[row][column];
	const current = parent.getChild(letter);
	if (current.word) {
		foundWords.push(current.word);
		current.word = null;
	}
	board[row][column] = "#";
	foundWords.push(...searchWords(board, row + 1, column, current));
	foundWords.push(...searchWords(board, row - 1, column, current));
	foundWords.push(...searchWords(board, row, column + 1, current));
	foundWords.push(...searchWords(board, row, column - 1, current));
	board[row][column] = letter;
	/**
	 * If the current node is a leaf node,
	 * then we have found the word at this node
	 * in the board, so we remove it from the parent
	 * node's children in order to avoid finding it again.
	 */
	if (current.children.size === 0) {
		parent.children.delete(letter);
	}
	return foundWords;
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
		current.word = word;
	}

	getRoot(): TrieNode {
		return this.root;
	}
}

class TrieNode {
	children: Map<string, TrieNode>;
	word?: string;
	constructor() {
		this.word = null;
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
