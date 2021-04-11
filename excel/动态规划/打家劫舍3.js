// dp[i][0]表示不打劫该结点获得的最大值
// dp[i][1]表示打劫该结点获得的最大值

function root(root) {
    const result = helpers(root)

    return Math.max(result[0], result[1])
}

function helpers(root) {
    if(!root) return [0, 0]

    if(root.left === null && root.right === null) return [0, root.val]

    const left = rob(root.left)

    const right = rob(root.right)

    // 递推公式
    // 同时打劫左右子树 和 打劫该结点但是不打劫左右子树的最大值
    return [
        Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
        left[0] + right[0] + root.val
    ]
}