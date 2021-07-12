// 归并排序
function sortList(head) {
    // 当长度小于等于1时直接返回
    if(!head || !head.next) return head

    const middle = findMiddleNode(head)
    
    // 断开链接
    let right = middle.next
    middle.next = null

    const left = sortList(head)
    right = sortList(right)

    // 合并当前的链表
    const newHead = mergeList(left, right)
    return newHead
}

function mergeList(left, right) {
    let newHead = null
    let lastNode = null
    while(left && right) {
        if(left.val < right.val) {
            if(!newHead){
                newHead = left
                lastNode = left
            }else{
                lastNode.next = left
                lastNode = left
            } 
            left = left.next
        }else{
            if(!newHead){
                newHead = right
                lastNode = right
            }else{
                lastNode.next = right
                lastNode = right
            } 
            right = right.next
        }
    }

    while(left) {
        lastNode.next = left
        lastNode = left
        left = left.next
    }

    while(right) {
        lastNode.next = right
        lastNode = right
        right = right.next
    }

    return newHead
}

function findMiddleNode(head) {
    let slow = head
    let fast = head

    while(fast){
        fast = fast.next
        slow = slow.next
        if(fast) {
            fast = fast.next
        }
    }
    return slow
}