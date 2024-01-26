/**
    Easy
    https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
*/
function findNumbers(nums: number[]): number {
    const evenDigitsNumbers = nums.filter((number) => number.toString().length % 2 === 0);
    return evenDigitsNumbers.length;
}