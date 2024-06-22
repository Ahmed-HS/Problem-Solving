/**
 * Easy
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */
function minCostClimbingStairs(cost: number[]): number {
	const seen = new Map<number, number>();
	function climbStairs(currentStep: number) {
		if (currentStep >= cost.length) {
			return 0;
		}
		const savedCost = seen.get(currentStep);
		if (savedCost !== undefined) return savedCost;
		const minimumCost =
			cost[currentStep] +
			Math.min(
				climbStairs(currentStep + 1),
				climbStairs(currentStep + 2)
			);
		seen.set(currentStep, minimumCost);
		return minimumCost;
	}
	return Math.min(climbStairs(0), climbStairs(1));
}
