function isSameTree(p, q) {
    if( !p && !q) return true
    if(p && q) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }else{
        return false
    }
}