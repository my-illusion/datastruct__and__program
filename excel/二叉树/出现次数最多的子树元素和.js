// 给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

// 你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

//  

// 示例 1：
// 输入:

//   5
//  /  \
// 2   -3
// 返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

// 示例 2：
// 输入：

//   5
//  /  \
// 2   -5
// 返回 [2]，只有 2 出现两次，-5 只出现 1 次。

function findFrequentTreeSum(root) {
    const map = {}
    helpers(root, map)

    const arr = Object.entries(map).sort((a, b) => b[1] - a[1])

    const result = []
    let prevSum = undefined
    for(let i = 0; i < arr.length; i++) {
        if(!result.length) {
            result.push(arr[i][0])
            prevSum = arr[i][1]
        }else {
            if(arr[i][1] === prevSum){
                result.push(arr[i][0])
            }else{
                break;
            }
        }
    }
    return result
}

function helpers(root, map) {
    if(!root) return 0
    const leftSum = helpers(root.left, map)
    const rightSum = helpers(root.right, map)

    const curSum = leftSum + rightSum + root.val
    if(map[curSum]){
        map[curSum]++
    }else{
        map[curSum] = 1
    }
    return curSum
}