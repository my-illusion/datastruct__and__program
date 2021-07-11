function removeNthFromEnd(head, n) {
    let slow = head
    let fast = head

    let index = n
    while(index-- > 0) {
        fast = fast.next
    }

    if(fast === null) return head.next

    if(fast) fast = fast.next

    while(fast !== null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return head
}