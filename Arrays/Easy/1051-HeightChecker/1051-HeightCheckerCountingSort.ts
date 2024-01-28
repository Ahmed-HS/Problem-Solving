/**
 * Easy
 * https://leetcode.com/problems/height-checker/
 */
function heightChecker(heights: number[]): number {
    let maxHeight = 0;
    const heightsFrequency = new Map();
    for (const height of heights) {
        const oldCount = heightsFrequency.get(height) ?? 0;
        heightsFrequency.set(height, oldCount + 1);
        maxHeight = Math.max(height, maxHeight);
    }

    let misplacedCount = 0;
    let currentHeight = 1;
    let position = 0;
    while (currentHeight <= maxHeight) {
        const count = heightsFrequency.get(currentHeight) ?? 0;
        if (count > 0) {
            if (heights[position] !== currentHeight) {
                misplacedCount++;
            }
            heightsFrequency.set(currentHeight, count - 1);
            position++;
        } else {
            currentHeight++;
        }
    }

    return misplacedCount;
}