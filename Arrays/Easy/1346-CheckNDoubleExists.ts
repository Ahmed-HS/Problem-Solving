/**
    Easy
    https://leetcode.com/problems/check-if-n-and-its-double-exist/
*/
function checkIfExist(arr: number[]): boolean {
    const seenNumbers = new Set();
    for (const number of arr) {
        if (seenNumbers.has(number * 2) || seenNumbers.has(number / 2)) {
            console.log(number);
            return true;
        }
        seenNumbers.add(number);
    }
    return false;
};