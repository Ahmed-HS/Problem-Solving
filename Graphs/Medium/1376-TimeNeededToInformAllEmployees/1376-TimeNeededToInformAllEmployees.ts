/**
 * Medium
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */
function numOfMinutes(
	n: number,
	headID: number,
	manager: number[],
	informTime: number[]
): number {
	const managerSubordinates = new Map<number, number[]>();
	for (const [employeeID, managerID] of manager.entries()) {
		const subordinateList = managerSubordinates.get(managerID) ?? [];
		subordinateList.push(employeeID);
		managerSubordinates.set(managerID, subordinateList);
	}
	let timeToInform = 0;
	const toVisit = [[headID, 0]];
	while (toVisit.length) {
		const [manager, time] = toVisit.pop();
		timeToInform = Math.max(timeToInform, time);
		const subordinates = managerSubordinates.get(manager) ?? [];
		subordinates.forEach((employee) =>
			toVisit.push([employee, time + informTime[manager]])
		);
	}
	return timeToInform;
}
