/**
 * Medium
 * https://leetcode.com/problems/jump-game-ii/
 */
function jump(jumps: number[]): number {
	const minimumSteps = new Array(jumps.length).fill(Infinity);
	minimumSteps[jumps.length - 1] = 0;
	for (let position = jumps.length - 2; position >= 0; position--) {
		for (let step = 1; step <= jumps[position]; step++) {
			const next = position + step;
			const jumpSteps = 1 + (minimumSteps[next] ?? 0);
			minimumSteps[position] = Math.min(
				minimumSteps[position],
				jumpSteps
			);
		}
	}
	return minimumSteps[0];
}
