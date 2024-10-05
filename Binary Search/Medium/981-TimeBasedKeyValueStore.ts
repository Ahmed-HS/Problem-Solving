/**
 * Medium
 * https://leetcode.com/problems/time-based-key-value-store/
 */
class TimeMap {
	private store = new Map<string, [number, string][]>();

	set(key: string, value: string, timestamp: number): void {
		if (!this.store.has(key)) {
			this.store.set(key, []);
		}
		const stamps = this.store.get(key);
		const insertIndex = this.findInsertIndex(stamps, timestamp);
		stamps.splice(insertIndex, 0, [timestamp, value]);
	}

	get(key: string, timestamp: number): string {
		if (!this.store.has(key)) return "";
		const stamps = this.store.get(key);
		const index = this.findInsertIndex(stamps, timestamp);
		if (index === 0) return "";
		return stamps[index - 1][1];
	}

	private findInsertIndex(
		timestamps: [number, string][],
		target: number
	): number {
		let start = 0;
		let end = timestamps.length - 1;
		while (start <= end) {
			const mid = start + Math.trunc((end - start) / 2);
			if (timestamps[mid][0] <= target) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return start;
	}
}
