/**
 * Medium
 * https://leetcode.com/problems/snapshot-array/
 */
class SnapshotArray {
	private numbers: number[][][];
	private snapId = 0;
	constructor(length: number) {
		this.numbers = new Array(length).fill(0).map(() => [[0, 0]]);
	}

	set(index: number, val: number): void {
		const snapLength = this.numbers[index].length;
		const snap = this.numbers[index][snapLength - 1];
		if (snap[0] === this.snapId) {
			snap[1] = val;
		} else {
			this.numbers[index].push([this.snapId, val]);
		}
	}

	snap(): number {
		this.snapId++;
		return this.snapId - 1;
	}

	get(index: number, snap_id: number): number {
		const snap = this.findSnap(index, snap_id);
		return snap[1];
	}

	private findSnap(index: number, id: number): number[] {
		const data = this.numbers[index];
		let start = 0;
		let end = this.numbers[index].length - 1;
		while (start <= end) {
			const mid = start + Math.trunc((end - start) / 2);
			if (data[mid][0] === id) {
				return data[mid];
			}
			if (data[mid][0] < id) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return data[end];
	}
}
