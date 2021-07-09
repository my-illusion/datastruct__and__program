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

function reverseBetween(head, left, right) {
    if(left === 1){
        return reverseTopN(head, right)
    }

    const newHead = reverseBetween(head.next, left - 1, right - 1)
    head.next = newHead
    return head
}

function reverseTopN(head, n) {
    let i = 0
    let prev = null
    let current = head

    while(current !== null && i < n) {
        const temp = current.next
        current.next = prev
        prev = current
        current = temp
        i++
    }

    head.next = current
    return prev
}