const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = canSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(canSum(7, [2, 3])); // [3, 2, 2]
console.log(canSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(canSum(7, [2, 4])); // null
console.log(canSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(canSum(300, [7, 14])); // null