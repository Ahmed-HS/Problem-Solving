/**
 * Medium
 * https://leetcode.com/problems/jump-game-ii/
 */
function jump(jumps: number[]): number {
	const minimumSteps = new Array(jumps.length).fill(undefined);
	function visit(current: number) {
		if (current >= jumps.length - 1) return 0;
		if (minimumSteps[current] !== undefined) return minimumSteps[current];
		let minimumJumps = Infinity;
		for (let step = jumps[current]; step > 0; step--) {
			const jumps = 1 + visit(current + step);
			minimumJumps = Math.min(minimumJumps, jumps);
		}
		minimumSteps[current] = minimumJumps;
		return minimumSteps[current];
	}
	return visit(0);
}
