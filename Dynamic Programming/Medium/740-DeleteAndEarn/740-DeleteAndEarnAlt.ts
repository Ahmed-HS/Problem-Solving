/**
 * Medium
 * https://leetcode.com/problems/delete-and-earn/
 */
function deleteAndEarn(nums: number[]): number {
	const max = Math.max(...nums);
	const sum: number[] = Array(max + 1).fill(0);

	nums.forEach((num) => (sum[num] += num));

	let oneStepBack = 0;
	let twoStepsBack = 0;
	for (let i = 0; i <= max; i++) {
		const take = twoStepsBack + sum[i];
		const profit = Math.max(take, oneStepBack);
		twoStepsBack = oneStepBack;
		oneStepBack = profit;
	}

	return oneStepBack;
}
