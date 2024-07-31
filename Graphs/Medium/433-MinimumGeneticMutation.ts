/**
 * Medium
 * https://leetcode.com/problems/minimum-genetic-mutation/
 */
function minMutation(
	startGene: string,
	endGene: string,
	bank: string[]
): number {
	const validGenes = new Set(bank);
	if (!validGenes.has(endGene)) return -1;
	const seen = new Set();
	const validLetters = ["A", "C", "G", "T"];
	const toVisit = [startGene];
	let steps = 0;
	while (toVisit.length) {
		steps++;
		let levelLength = toVisit.length;
		while (levelLength--) {
			const gene = toVisit.shift();
			for (let i = 0; i < gene.length; i++) {
				for (const letter of validLetters) {
					const mutation = [...gene];
					mutation[i] = letter;
					const newGene = mutation.join("");
					if (newGene === endGene) return steps;
					if (seen.has(newGene) || !validGenes.has(newGene)) continue;
					seen.add(newGene);
					toVisit.push(newGene);
				}
			}
		}
	}
	return -1;
}
