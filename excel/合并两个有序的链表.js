function mergeSortableList(l1, l2) {
    if(l1 === null){
        return l2
    }else if(l2 === null) {
        return l1
    }

    let head = null
    if(l1.val < l2.val) {
        head = l1
        head.next = mergeSortableList(l1.next, l2)
    }else{
        head = l2
        head.next = mergeSortableList(l1, l2.next)
    }
    return head
}

function ListNode(val, next) {
    this.val = val
    this.next = next
}

const l1 = new ListNode(
    1,
    new ListNode(
        4,
        new ListNode(
            8,
            null
        )
    )
)

const l2 = new ListNode(
    2,
    new ListNode(
        6,
        new ListNode(
            10,
            new ListNode(
                12,
                null
            )
        )
    )
)

let head = mergeSortableList(l1, l2)

while(head !== null) {
    console.log(head.val)
    head = head.next
}