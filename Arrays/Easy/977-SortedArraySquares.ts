// https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {
    let squaredNumbers = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    for (let i = right; i >= 0; i--) {
        let leftNumber = nums[left] ** 2
        let rightNumber = nums[right] ** 2
        if (leftNumber > rightNumber) {
            squaredNumbers[i] = leftNumber;
            left++;
        } else {
            squaredNumbers[i] = rightNumber;
            right--;
        }
    }
    return squaredNumbers;
};