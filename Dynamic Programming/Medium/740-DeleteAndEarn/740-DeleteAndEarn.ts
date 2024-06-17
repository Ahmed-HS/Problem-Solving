/**
 * Medium
 * https://leetcode.com/problems/delete-and-earn/
 */
function deleteAndEarn(numbers: number[]): number {
	const frequencies = new Map<number, number>();
	for (const number of numbers) {
		const oldFrequency = frequencies.get(number) ?? 0;
		frequencies.set(number, oldFrequency + 1);
	}
	const sortedFrequencies = [...frequencies.entries()].sort(
		(a, b) => a[0] - b[0]
	);
	let twoStepsBack = 0;
	let oneStepBack = 0;
	let previous = -Infinity;
	for (const [number, frequency] of sortedFrequencies) {
		const currentProfit = number * frequency;
		const profit =
			number - 1 !== previous
				? oneStepBack + currentProfit
				: Math.max(oneStepBack, currentProfit + twoStepsBack);
		twoStepsBack = oneStepBack;
		oneStepBack = profit;
		previous = number;
	}
	return oneStepBack;
}
