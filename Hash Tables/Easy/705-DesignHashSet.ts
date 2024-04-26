/**
 * Easy
 * https://leetcode.com/problems/design-hashset/
 */
class MyHashSet {
	private data: number[][];
	private capacity: number;
	constructor() {
		this.capacity = 10007;
		this.data = Array.from(
			{
				length: this.capacity,
			},
			() => []
		);
	}

	add(key: number): void {
		const bucket = this.hashKey(key);
		if (this.data[bucket].includes(key)) {
			return;
		}
		this.data[bucket].push(key);
	}

	remove(key: number): void {
		const bucket = this.hashKey(key);
		const keyIndex = this.data[bucket].indexOf(key);
		if (keyIndex !== -1) {
			this.data[bucket].splice(keyIndex, 1);
		}
	}

	contains(key: number): boolean {
		const bucket = this.hashKey(key);
		return this.data[bucket].includes(key);
	}

	private hashKey(key: number) {
		return key % this.capacity;
	}
}
