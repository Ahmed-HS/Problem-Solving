/**
 * Medium
 * https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 */
class TrieNode {
	children: TrieNode[];

	constructor() {
		this.children = new Array(2);
	}
}

class Trie {
	private root: TrieNode;

	constructor() {
		this.root = new TrieNode();
	}

	insert(number: number): void {
		/**
		 * Insert the number into the trie by iterating
		 * through its bits from the most significant
		 * bit to the least significant bit.
		 * So the bits with higher weights are inserted first.
		 */
		let current = this.root;
		for (let i = 31; i >= 0; i--) {
			const bit = (number >>> i) & 1;
			if (!current.children[bit]) {
				current.children[bit] = new TrieNode();
			}
			current = current.children[bit];
		}
	}

	findMaxXOR(number: number): number {
		/**
		 * Iterate through the bits of the number from the
		 * most significant bit to the least significant bit.
		 * To consider the bits with higher weights first.
		 * If the current bit's complement is in the trie,
		 * then there is a number in the trie that has a bit
		 * at the current position that is different from the
		 * current number's bit. This means that the XOR of
		 * the current number with that number will have a 1
		 * at the current position.
		 * So, we add 1 << i to the XOR to set the bit.
		 * Otherwise, we set the bit to 0 by not adding anything.
		 */
		let current = this.root;
		let xor = 0;
		for (let i = 31; i >= 0; i--) {
			const bit = (number >>> i) & 1;
			const complement = bit ^ 1;
			if (current.children[complement]) {
				xor += 1 << i;
				current = current.children[complement];
			} else {
				current = current.children[bit];
			}
		}
		return xor;
	}
}

function findMaximumXOR(numbers: number[]): number {
	const bitsTrie = new Trie();
	for (const number of numbers) {
		bitsTrie.insert(number);
	}
	let max = 0;
	for (const number of numbers) {
		max = Math.max(max, bitsTrie.findMaxXOR(number));
	}
	return max;
}
