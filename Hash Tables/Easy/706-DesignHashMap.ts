/**
 * Easy
 * https://leetcode.com/problems/design-hashmap/
 */
class MyHashMap {
	private data: number[][][];
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

	put(key: number, value: number): void {
		const bucket = this.hashKey(key);
		const item = this.data[bucket].find((item) => item[0] === key);
		if (item) {
			item[1] = value;
			return;
		}
		this.data[bucket].push([key, value]);
	}

	get(key: number): number {
		const bucket = this.hashKey(key);
		const item = this.data[bucket].find((item) => item[0] === key);
		if (!item) return -1;
		return item[1];
	}

	remove(key: number): void {
		const bucket = this.hashKey(key);
		const keyIndex = this.data[bucket].findIndex((item) => item[0] === key);
		if (keyIndex !== -1) {
			this.data[bucket].splice(keyIndex, 1);
		}
	}

	private hashKey(key: number) {
		return key % this.capacity;
	}
}
