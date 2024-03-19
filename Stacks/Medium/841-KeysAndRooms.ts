/**
 * Medium
 * https://leetcode.com/problems/keys-and-rooms/
 */
function canVisitAllRooms(rooms: number[][]): boolean {
	const toVisit = [0];
	const visited = new Set<number>();
	visited.add(0);
	while (toVisit.length) {
		const current = toVisit.pop();
		const neighbors = rooms[current];
		for (const room of neighbors) {
			if (!visited.has(room)) {
				visited.add(room);
				toVisit.push(room);
			}
		}
	}
	return rooms.length === visited.size;
}
