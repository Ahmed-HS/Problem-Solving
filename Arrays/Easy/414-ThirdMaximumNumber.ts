/**
    Easy
    https://leetcode.com/problems/third-maximum-number/
*/
function thirdMax(nums: number[]): number {
    let max = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;
    for (const number of nums) {

        if (number === max || number === secondMax || number === thirdMax) {
            continue;
        }

        if (number > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = number;
        } else if (number > secondMax) {
            thirdMax = secondMax;
            secondMax = number;
        } else if (number > thirdMax) {
            thirdMax = number;
        }
    }

    return thirdMax === -Infinity ? max : thirdMax;
};