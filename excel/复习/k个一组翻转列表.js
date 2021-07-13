// function reverseKGroup(head, k) {
//     let i = 0
//     let nextNode = head
//     while(++i < k && nextNode) {
//         nextNode = nextNode.next
//     }
//     if(!nextNode) return head
//     const temp = nextNode.next
//     nextNode.next = null
//     let next = reverseList(head, null)
//     head.next =  reverseKGroup(temp, k)
//     return next
// }

function reverseList(head, tail = null) {
    let prev = null
    let current = head
    while(current !== tail) {
        const temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev
}


function reverseKGroup(head, k) {
    // 找到前k个结点
    let nextNode = head
    let i = 0

    while(i < k && nextNode) {
        nextNode = nextNode.next
        i++
    }

    if(nextNode === null) return head

    const nextReverseNode = nextNode.next
    nextNode.next = null

    const newHead = reverseList(head, null)
    head.next = reverseKGroup(nextReverseNode, k)
    return newHead
}