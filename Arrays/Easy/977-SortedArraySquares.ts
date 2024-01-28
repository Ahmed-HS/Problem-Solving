/**
 * Easy
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */
function sortedSquares(nums: number[]): number[] {
    const squaredNumbers = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    for (let i = right; i >= 0; i--) {
        const leftNumber = nums[left] ** 2
        const rightNumber = nums[right] ** 2
        if (leftNumber > rightNumber) {
            squaredNumbers[i] = leftNumber;
            left++;
        } else {
            squaredNumbers[i] = rightNumber;
            right--;
        }
    }
    return squaredNumbers;
}