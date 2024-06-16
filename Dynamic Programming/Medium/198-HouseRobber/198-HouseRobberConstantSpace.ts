/**
 * Medium
 * https://leetcode.com/problems/house-robber/
 */
function rob(profits: number[]): number {
	let twoStepsBack = 0;
	let oneStepBack = profits[0];
	for (let i = 2; i <= profits.length; i++) {
		const current = Math.max(oneStepBack, profits[i - 1] + twoStepsBack);
		twoStepsBack = oneStepBack;
		oneStepBack = current;
	}
	return oneStepBack;
}
