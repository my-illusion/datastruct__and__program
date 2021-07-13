function reverseKGroup(head, k) {
    let i = 0
    let nextNode = head
    while(++i < k && nextNode) {
        nextNode = nextNode.next
    }
    if(!nextNode) return head
    const temp = nextNode.next
    nextNode.next = null
    let next = reverseList(head, null)
    head.next =  reverseKGroup(temp, k)
    return next
}

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