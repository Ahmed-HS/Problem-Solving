/**
 * Medium
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */
function mincostTickets(days: number[], costs: number[]): number {
	const minimumCost = new Array(days.length + 1);
	minimumCost[days.length] = 0;
	for (let dayIndex = days.length - 1; dayIndex >= 0; dayIndex--) {
		const today = days[dayIndex];
		const buy1Day =
			minimumCost[search(today + 1, dayIndex, days)] + costs[0];
		const buy7Days =
			minimumCost[search(today + 7, dayIndex, days)] + costs[1];
		const buy30Days =
			minimumCost[search(today + 30, dayIndex, days)] + costs[2];
		minimumCost[dayIndex] = Math.min(buy1Day, buy7Days, buy30Days);
	}
	return minimumCost[0];
}

function search(target: number, start: number, numbers: number[]): number {
	let end = numbers.length - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] === target) {
			return mid;
		}
		if (numbers[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
