const findGrid = (m, n, memo ={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = findGrid(m - 1, n, memo) + findGrid(m, n - 1, memo);
    return memo[key];
}

console.log(findGrid(2, 2)); // 2
console.log(findGrid(3, 3)); // 6
console.log(findGrid(18, 18)); // 2333606220