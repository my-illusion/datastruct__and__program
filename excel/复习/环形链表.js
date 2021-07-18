function hasCycle(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        slow = slow.next

        fast = fast.next
        fast = fast.next

        if(fast === slow) return true
    }
    return false
}