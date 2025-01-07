/**
 * Medium
 * https://leetcode.com/problems/jump-game/
 */
function canJump(jumps: number[]): boolean {
	function visit(current: number) {
		if (current >= jumps.length - 1) return true;
		if (jumps[current] < 0) return false;
		const maxJumps = jumps[current];
		jumps[current] *= -1;
		for (let step = maxJumps; step > 0; step--) {
			if (visit(current + step)) return true;
		}
		return false;
	}
	return visit(0);
}
