/**
 * Medium
 * https://leetcode.com/problems/jump-game/
 */
function canJump(jumps: number[]): boolean {
	const canReach = new Array(jumps.length).fill(false);
	canReach[jumps.length - 1] = true;
	for (let position = jumps.length - 2; position >= 0; position--) {
		for (let step = jumps[position]; step > 0; step--) {
			const next = position + step;
			if (next > jumps.length || canReach[next]) {
				canReach[position] = true;
				break;
			}
		}
	}
	return canReach[0];
}
