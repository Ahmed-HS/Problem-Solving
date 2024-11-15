/**
 * Medium
 * https://leetcode.com/problems/h-index-ii/
 */
function hIndex(citations: number[]): number {
	let start = 0;
	let end = citations.length - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const researchCount = citations.length - mid;
		/**
		 * If the number of citations is equal to the number of research papers
		 * between the mid and the end, then the h-index is the number of citations.
		 * Becuase any citations count greater than the number of citations
		 * at the mid index will have a research paper count less than it.
		 * If the number of research papers between the mid and the end is less than
		 * the number of citations at the mid index, then the h-index
		 * must be to the left of the mid index.
		 * Otherwise, it must be to the right of the mid index.
		 */
		if (citations[mid] === researchCount) return citations[mid];
		if (researchCount < citations[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	/**
	 * At the end of the loop, the start index will point at
	 * a citation count that is greater than the number of research papers
	 * between the start and the end. So the h-index is the number of research papers
	 * between the start and the end.
	 */
	return citations.length - start;
}
