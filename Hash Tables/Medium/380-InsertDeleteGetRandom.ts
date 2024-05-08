/**
 * Medium
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 */
class RandomizedSet {
	/**
	 * We will store the values in an array and
	 * use a map to store the index of each value in the array.
	 * When we remove a value, there will be a gap in the array.
	 * To fill the gap, we will move the last value of
	 * the array to the removed value's index and update the
	 * index of the last value in the map.
	 * Then we will remove the last value from the array
	 * and remove the deleted value from the map.
	 * This way, we can remove a value in O(1) time.
	 */
	private values = [];
	private valuesIndex = new Map<number, number>();
	insert(val: number): boolean {
		if (this.valuesIndex.has(val)) return false;
		this.values.push(val);
		this.valuesIndex.set(val, this.values.length - 1);
		return true;
	}

	remove(val: number): boolean {
		const removedIndex = this.valuesIndex.get(val);
		if (removedIndex === undefined) return false;
		const last = this.values[this.values.length - 1];
		this.values[removedIndex] = last;
		this.valuesIndex.set(last, removedIndex);
		this.values.pop();
		this.valuesIndex.delete(val);
		return true;
	}

	getRandom(): number {
		const randomIndex = Math.trunc(Math.random() * this.valuesIndex.size);
		return this.values[randomIndex];
	}
}
