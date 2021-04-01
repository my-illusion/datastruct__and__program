function ListNode(val, next) {
    this.val = val
    this.next = next
}

const root = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4, 
                new ListNode(
                    5,
                    null
                )
            )
        )
    )
)

let newRoot = null

function reverseList(root) {
    if(!root) return null
    const prev = reverseList(root.next)
    if(!prev) {
        newRoot = root
    }else{
        prev.next = root
        root.next = null
    }
    return root
}

reverseList(root)

while(newRoot !== null) {
    console.log(newRoot.val)
    newRoot = newRoot.next
}