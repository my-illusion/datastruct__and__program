// 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

// 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

// 示例 1:

// 输入: 

//            1
//          /   \
//         3     2
//        / \     \  
//       5   3     9 

// 输出: 4
// 解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
// 示例 2:

// 输入: 

//           1
//          /  
//         3    
//        / \       
//       5   3     

// 输出: 2
// 解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
// 示例 3:

// 输入: 

//           1
//          / \
//         3   2 
//        /        
//       5      

// 输出: 2
// 解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
// 示例 4:

// 输入: 

//           1
//          / \
//         3   2
//        /     \  
//       5       9 
//      /         \
//     6           7
// 输出: 8
// 解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。

// 超时了。。。。。orz
// function widthOfBinaryTree(root) {
//     const queue = [root]
//     let ans = -Infinity
//     while(queue.length) {
//         const size = queue.length

//         // 如果当前的队列所有的元素都是null 直接返回
//         const isAllNUll = !queue.some(i => i !== null)

//         if(isAllNUll) break

//         // 计算当前层的最大宽度
//         let index = queue.length - 1
//         let start = 0
//         while(index >= 0 && queue[index] === null) index--
//         while(start <= queue.length - 1 && queue[start] === null) start++

//         ans = Math.max(ans, index - start + 1)

//         for(let i = 0; i < size; i++) {
//             const node = queue.shift()
//             if(node !== null){
//                 queue.push(node.left)
//                 queue.push(node.right)
//             }else{
//                 queue.push(null)
//                 queue.push(null)
//             }
//         }
//     }
//     return ans
// }

function TreeNode(val, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
}

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(5),
        null
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(4)
    )
)

console.log(
    widthOfBinaryTree(root)
)

function widthOfBinaryTree(root) {
    const queue = [
        {
            node: root,
            position: 0
        }
    ]
    let ans = -Infinity

    while(queue.length) {
        const size = queue.length
        ans = Math.max(ans, queue[queue.length-1].position - queue[0].position + 1)
        for(let i = 0; i < size; i++) {
            const { node, position } = queue.shift()

            if(node.left) queue.push({
                node: node.left,
                position: position * 2
            })
            if(node.right) queue.push({
                node: node.right,
                position: position * 2 + 1
            })
        }
    }
    return ans
}

