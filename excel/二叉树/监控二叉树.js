function minCameraCover(root) {
    const result = {current: 0}
    const dis = helpers(root, result)
    if(dis === 2) {
        result.current++
    }
    return result.current
}

function helpers(root, result) {
    if(!root){
        return 1
    }
    const l = helpers(root.left)
    const r = helpers(root.right)

    let dis = Math.min(l, r) + 1
    if(Math.max(l, r) === 2) {
        dis = 0
        result.current++
    }
    return dis
}