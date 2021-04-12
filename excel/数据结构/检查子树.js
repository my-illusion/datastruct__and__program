
function checkSubTree(t1, t2) {
    if (t2 == null) {
        return true;
    }
    if (t1 == null) {
        return false;
    }
    //先判断当前的节点，如果不对，再看左子树和右子树呗
    return helpers(t1, t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2);
}

function helpers(t1, t2) {
    if(!t2) return true

    if(!t1) return false

    if(t1.val !== t2.val){
        return false
    }

    return helpers(t1.left, t2.left) && helpers(t1.right, t2.right)
}