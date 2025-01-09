/**
 * Medium
 * https://leetcode.com/problems/jump-game-ii/
 */
function jump(jumps: number[]): number {
	let steps = 0;
	let maxReach = 0;
	let lastJump = 0;
	for (let i = 0; i < jumps.length - 1; i++) {
		maxReach = Math.max(maxReach, i + jumps[i]);
		if (lastJump === i) {
			lastJump = maxReach;
			steps++;
		}
	}
	return steps;
}
