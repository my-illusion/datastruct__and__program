function insertionSortList(head) {
    if(!head || !head.next) return head

    const dummyNode = new ListNode(0)
    dummyNode.next = head
    let lastSorted = head, curr = head
    while(curr !== null) {
        if(lastSorted.val <= curr.val) {
            lastSorted = lastSorted.next
        }else{
            let prev = dummyNode
            while(prev.next.val <= curr.val) {
                prev = prev.next
            }

            // prev -- curr -> mode
            lastSorted.next = curr.next
            curr.next = prev.next
            prev.next = curr
        }
        curr = lastSorted.next
    }
    return dummyNode.next
}