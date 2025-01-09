/**
 * Medium
 * https://leetcode.com/problems/jump-game-ii/
 */
function jump(jumps: number[]): number {
	if (jumps.length < 2) return 0;
	let level = 0;
	const visited = new Array(jumps.length).fill(false);
	visited[0] = true;
	const toVisit = [0];
	while (toVisit.length) {
		level++;
		let levelLength = toVisit.length;
		while (levelLength--) {
			const current = toVisit.shift();
			for (let step = jumps[current]; step > 0; step--) {
				const next = current + step;
				if (next >= jumps.length - 1) return level;
				if (visited[next]) continue;
				toVisit.push(next);
				visited[next] = true;
			}
		}
	}
	return -1;
}
