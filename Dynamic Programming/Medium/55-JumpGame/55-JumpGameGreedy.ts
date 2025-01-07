/**
 * Medium
 * https://leetcode.com/problems/jump-game/
 */
function canJump(jumps: number[]): boolean {
	let maxReach = 0;
	for (let i = 0; i < jumps.length; i++) {
		if (maxReach < i) return false;
		maxReach = Math.max(maxReach, i + jumps[i]);
	}
	return true;
}
