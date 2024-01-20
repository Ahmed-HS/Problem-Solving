/**
    Easy
    https://leetcode.com/problems/height-checker/
*/
function heightChecker(heights: number[]): number {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let misplacedCount = 0;
    for (const i in heights) {
        if (sortedHeights[i] !== heights[i]) {
            misplacedCount++;
        }
    }
    return misplacedCount;
};