/**
 * Medium
 * https://leetcode.com/problems/gas-station/
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
	let totalGas = 0;
	let totalCost = 0;
	let start = 0;
	let tank = 0;
	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i];
		totalCost += cost[i];
		tank += gas[i] - cost[i];
		/**
		 * If the tank is negative, it means we can't start
		 * from any point between start and i. because any
		 * point between start and i will begin with even less
		 * gas than the start point. So we start from i + 1.
		 */
		if (tank < 0) {
			start = i + 1;
			tank = 0;
		}
	}
	// Not enough gas to complete the circuit.
	if (totalGas < totalCost) return -1;
	return start;
}
