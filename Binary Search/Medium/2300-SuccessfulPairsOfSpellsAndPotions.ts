/**
 * Medium
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 */
function successfulPairs(
	spells: number[],
	potions: number[],
	success: number
): number[] {
	potions.sort((a, b) => a - b);
	const pairs = [];
	for (const spell of spells) {
		const successIndex = firstSuccessfulPotion(spell, success, potions);
		const successCount = potions.length - successIndex;
		pairs.push(successCount);
	}
	return pairs;
}

function firstSuccessfulPotion(
	spell: number,
	success: number,
	potions: number[]
) {
	let start = 0;
	let end = potions.length;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (potions[mid] * spell >= success) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
