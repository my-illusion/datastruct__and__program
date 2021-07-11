function countNodes(root) {
    if(!root) return 0

    const leftLevel = getLevel(root.left)
    const rightLevel = getLevel(root.right)

    if(leftLevel === rightLevel) {
        return countNodes(root.right) + (1 << leftLevel);
    }else{
        return countNodes(root.left) + (1 << rightLevel);
    }
}

function getLevel(root) {
    let levels = 0
    while(root) {
        root = root.left
        levels++
    }
    return levels
}