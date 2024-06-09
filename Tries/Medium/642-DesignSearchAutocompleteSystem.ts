/**
 * Medium
 * https://leetcode.com/problems/design-search-autocomplete-system/
 */
class Trie {
	private root: TrieNode;
	constructor() {
		this.root = new TrieNode();
	}

	insert(word: string, frequency: number) {
		let current = this.root;
		for (const letter of word) {
			current = current.createOrGetChild(letter);
		}
		current.frequency = frequency;
		current.word = word;
	}

	private getNodeWithPrefix(prefix: string): TrieNode | null {
		let current = this.root;
		for (const letter of prefix) {
			current = current.getChild(letter);
			if (!current) return null;
		}
		return current;
	}

	getAutocompleteWords(prefix: string): string[] {
		const autocompleteWords: TrieNode[] = [];
		const root = this.getNodeWithPrefix(prefix);

		const toVisit = root ? [root] : [];
		while (toVisit.length) {
			const current = toVisit.pop();
			toVisit.push(...current.getChildren());
			if (current.frequency < 1) continue;
			autocompleteWords.push(current);
			// Sort by frequency and lexographical order
			autocompleteWords.sort(
				(a, b) =>
					b.frequency - a.frequency || a.word.localeCompare(b.word)
			);
			// Keep only top 3 words
			if (autocompleteWords.length > 3) {
				autocompleteWords.shift();
			}
		}
		return autocompleteWords.map((node) => node.word);
	}
}

class TrieNode {
	private children: Map<string, TrieNode>;
	frequency: number;
	word: string;
	constructor() {
		this.frequency = 0;
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
const wordsTrie = new Trie();
const currentInput: string[] = [];
function autocompleteSystem(sentences: string[], times: number[]): void {
	for (const [index, sentence] of sentences.entries()) {
		wordsTrie.insert(sentence, times[index]);
	}
}

function input(letter: string): string[] {
	const autocompleteResult: string[] = [];
	if (letter === "#") {
		wordsTrie.insert(currentInput.join(""), 1);
		// Reset current input for next input
		currentInput.length = 0;
		// Autocomplete list is empty for new input
		return autocompleteResult;
	}
	// Add new character to current input
	currentInput.push(letter);
	return wordsTrie.getAutocompleteWords(currentInput.join(""));
}
