/**
 * Easy
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
	const minimumCost = new Array(cost.length + 2);
	minimumCost[cost.length] = 0;
	minimumCost[cost.length + 1] = 0;
	for (let currentStep = cost.length - 1; currentStep >= 0; currentStep--) {
		minimumCost[currentStep] =
			cost[currentStep] +
			Math.min(
				minimumCost[currentStep + 1],
				minimumCost[currentStep + 2]
			);
	}
	return Math.min(minimumCost[0], minimumCost[1]);
}
