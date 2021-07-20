function swapPairs(head) {
    // k个一组翻转链表
    return reverseKthList(head, 2)
}

function reverseKthList(head, k) {
    if(!head) return null

    // 指针前进k步
    let index = 1
    let nextNode = head
    while(index < k && nextNode) {
        nextNode = nextNode.next
        index++
    }

    if(!nextNode) return head

    const next = nextNode.next
    nextNode.next = null

    const newHead = reverseList(head)
    head.next = reverseKthList(next, k)
    return newHead
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