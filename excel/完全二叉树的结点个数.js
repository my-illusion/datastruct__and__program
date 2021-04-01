/**
 * 给定一个树，求其符合完全二叉树结构的结点的个数
 */

function countNodes(root) {
    if(!root) return 0

    let left_levels = countLevels(root.left)
    let right_levels = countLevels(root.right)

    if(left_levels === right_levels) {
        return countNodes(root.right) + (1 << left_levels);
    }else{
        return countNodes(root.left) + (1 << right_levels)
    }
}

function countLevels(root) {
    let levels = 0
    while(root){
        root = root.left
        levels += 1
    }
    return levels
}

