function getKthFromEnd(head, k) {
    let index = 0
    let fast = head
    let slow = head
    while(index < k){
        fast = fast.next
        index++
    }

    while(fast !== null) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}