// 给你一棵以 root 为根的二叉树和一个 head 为第一个节点的链表。

// 如果在二叉树中，存在一条一直向下的路径，且每个点的数值恰好一一对应以 head 为首的链表中每个节点的值，那么请你返回 True ，否则返回 False 。

// 一直向下的路径的意思是：从树中某个节点开始，一直连续向下的路径。

// 输入：head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
// 输出：true

// 4 -> 3 -> 1 -> 2      4 -> 3 -> 2

function isSubPath(head, root) {
    if (head == null) {
        return true;
    }
    if (root == null) {
        return false;
    }
    //先判断当前的节点，如果不对，再看左子树和右子树呗
    return helpers(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
}

function helpers(head, root) {
    if(!head) return true

    if(!root) return false

    if(root.val !== head.val){
        return false
    }

    return isSubPath(head.next, root.left) || isSubPath(head.next, root.right)
}