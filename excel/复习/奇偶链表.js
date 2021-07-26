// 思路是保留着奇数的最后的一个结点？？？？
function oddEvenList(head) {
    if(!head || !head.next) return head

    let recentOddNode = head

    let cursor = head.next.next
    let prev = head.next
    let count = 1
    while(cursor !== null) {
        if(count % 1) {
            // 该结点是奇数结点，需要往前移动
            prev.next = cursor.next
            recentOddNode.next = cursor
            cursor.next = prev
            cursor = prev.next
        }else{
            prev = cursor
        }

        count++
        cursor = cursor.next
    }

    return head
}


function oddEvenList(head) {
    if(!head) return null

    let evenHead = head.next
    let odd = head, even = evenHead

    while(even && even.next) {
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead
    return head
}