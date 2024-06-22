/**
 * Easy
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
	let oneStep = 0;
	let twoSteps = 0;
	for (let stepIndex = cost.length - 1; stepIndex >= 0; stepIndex--) {
		const current = cost[stepIndex] + Math.min(oneStep, twoSteps);
		twoSteps = oneStep;
		oneStep = current;
	}
	return Math.min(oneStep, twoSteps);
}
