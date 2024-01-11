// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
function findNumbers(nums: number[]): number {
    let evenDigitsNumbers = 0;
    for (let number of nums) {
        let digitsCount = number.toString().length;
        if( digitsCount % 2 === 0) {
            evenDigitsNumbers++;
        }
    }
    return evenDigitsNumbers;
};