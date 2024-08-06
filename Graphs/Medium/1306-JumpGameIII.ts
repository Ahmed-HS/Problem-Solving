/**
 * Medium
 * https://leetcode.com/problems/jump-game-iii/
 */
function canReach(numbers: number[], start: number): boolean {
	if (numbers[start] === 0) return true;
	numbers[start] *= -1;
	const neighbors = [start + numbers[start], start - numbers[start]];
	for (const index of neighbors) {
		if (index < 0 || index >= numbers.length || numbers[index] < 0)
			continue;
		if (canReach(numbers, index)) return true;
	}
	return false;
}
