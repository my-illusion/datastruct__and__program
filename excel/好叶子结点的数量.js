// 给你二叉树的根节点 root 和一个整数 distance 。

// 如果二叉树中两个 叶 节点之间的 最短路径长度 小于或者等于 distance ，那它们就可以构成一组 好叶子节点对 。

// 返回树中 好叶子节点对的数量 。

// root = [1,2,3,null,4], distance = 3
// 输出 1

// root = [1,2,3,4,5,6,7], distance = 3
// 输出 2

function countPairs(root, distance) {
    if(!root || (!root.left && !root.right)) return 0
    const ans = {
        current: 0
    }
    dfs(root, distance, ans)
    return ans.current
}

function dfs(root, distance, ans) {
    if(!root) return []
    if(!root.left && !root.right) return [0]

    let left_Leaf = dfs(root.left, distance, ans)
    let right_leaf = dfs(root.right, distance, ans)

    const result = []
    left_Leaf = left_Leaf.map(i => ++i)
    right_leaf = right_leaf.map(i => ++i)

    result.push(...left_Leaf.filter(i => i <= distance))
    result.push(...right_leaf.filter(i => i <= distance))


    left_Leaf.forEach(a => {
        right_leaf.forEach(b => {
            if(a + b <= distance){
                ans.current++
            }
        })
    })
    return result
}