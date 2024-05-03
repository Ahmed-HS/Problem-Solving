/**
 * Easy
 * https://leetcode.com/problems/two-sum-iii-data-structure-design/
 */

const frequency = new Map<number, number>();

function addNumber(number: number) {
	const count = frequency.get(number) ?? 0;
	frequency.set(number, count + 1);
}

function find(value: number): boolean {
	for (const number of frequency.values()) {
		const complement = value - number;
		const count = frequency.get(complement);
		if (count) {
			if (complement !== number || count > 1) {
				return true;
			}
		}
	}
	return false;
}
