/**
 * Medium
 * https://leetcode.com/problems/find-the-index-of-the-large-integer/
 */
function getIndex(reader: {
	length: () => number;
	compareSub: (
		start1: number,
		end1: number,
		start2: number,
		end2: number
	) => number;
}): number {
	/**
	 * All elements of the array are equal except for
	 * one element which is larger than the rest.
	 * So if the array length is odd, and we
	 * divide the array into 2 parts of unequal length,
	 * the part with the larger length can have a larger sum,
	 * but the part with the smaller length can have a larger maximum element.
	 * So we divide the array into 3 parts.
	 * If the first part is equal to the second part,
	 * the large element is in the third part.
	 * If the first part is greater than the second part,
	 * the large element is in the first part.
	 * If the first part is less than the second part,
	 * the large element is in the second part.
	 */
	let start = 0;
	let end = reader.length() - 1;

	while (start < end) {
		const third = Math.trunc((end - start) / 3);
		const part1End = start + third;
		const part2Start = part1End + 1;
		const part2End = part2Start + third;
		const part3Start = part2End + 1;

		const comparisonResult = reader.compareSub(
			start,
			part1End,
			part2Start,
			part2End
		);

		if (comparisonResult === 0) {
			start = part3Start;
		} else if (comparisonResult === 1) {
			end = part1End;
		} else {
			start = part2Start;
			end = part2End;
		}
	}

	return start;
}
