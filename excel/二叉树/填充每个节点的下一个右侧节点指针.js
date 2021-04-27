// function connect(root) {
//     if(!root || !root.left) return root

//     root.left.next = root.right
//     if(root.next) {
//         root.right.next = root.next.left
//     }
//     connect(root.left)
//     connect(root.right)
//     return root
// }

function connect(root) {
    if(!root) return root

    if(root.left) {
        root.left.next = root.right ? root.right : findNext(root.next)
    }

    if(root.right){
        root.right.next = findNext(root.next)
    }

    connect(root.left)
    connect(root.right)
    return root
}

function findNext(curr) {
    if(!curr) return curr
    if(curr.left) return curr.left
    if(curr.right) return curr.right
    return findNext(curr.next)
}