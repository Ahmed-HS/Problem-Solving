/**
 * Medium
 * https://leetcode.com/problems/map-sum-pairs/
 */
class TrieNode {
	children: TrieNode[] = new Array(26).fill(null);
	sum: number = 0;
}

class MapSum {
	private nodeValue: Map<string, number> = new Map<string, number>();
	private trieRoot: TrieNode = new TrieNode();

	public insert(word: string, value: number): void {
		const oldValue = this.nodeValue.get(word) ?? 0;
		const newValue = value - oldValue;
		let current = this.trieRoot;
		for (const letter of word) {
			const index = letter.charCodeAt(0) - "a".charCodeAt(0);
			if (current.children[index] === null) {
				current.children[index] = new TrieNode();
			}
			current = current.children[index];
			current.sum += newValue;
		}
		this.nodeValue.set(word, value);
	}

	public sum(prefix: string): number {
		let current = this.trieRoot;
		for (const letter of prefix) {
			const index = letter.charCodeAt(0) - "a".charCodeAt(0);
			if (current.children[index] === null) {
				return 0;
			}
			current = current.children[index];
		}
		return current.sum;
	}
}
