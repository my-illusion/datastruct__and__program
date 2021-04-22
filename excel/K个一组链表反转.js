function reverseKGroup(head, k) {
    // 取前k个元素的反转
    let newHead = head
    for(let i = 0; i < k; i++) {
        if(newHead === null) return head
        newHead = newHead.next
    }
    const temp = reverse(head, newHead)
    head.next = reverseKGroup(newHead, k)
    return temp
}

function reverse(head, tail = null) {
    let prev = null
    let cur = head
    while(cur !== tail) {
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    return prev
}