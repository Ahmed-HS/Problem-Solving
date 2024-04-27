/**
 * Easy
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 */
function findRestaurant(list1: string[], list2: string[]): string[] {
	const seen = new Map();
	for (const [index, word] of list1.entries()) {
		seen.set(word, index);
	}
	let minimumIndexSum = Infinity;
	let result = [];
	for (const [index, word] of list2.entries()) {
		const seenIndex = seen.get(word);
		if (seenIndex === undefined) continue;
		const indexSum = index + seenIndex;
		if (indexSum < minimumIndexSum) {
			result = [word];
			minimumIndexSum = indexSum;
		} else if (indexSum === minimumIndexSum) {
			result.push(word);
		}
	}
	return result;
}
