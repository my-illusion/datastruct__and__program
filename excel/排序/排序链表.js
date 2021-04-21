/**
 * 归并排序
 * @param {*} head 
 */
function sortList(head) {
    if(!head || head.next === null) return head

    // 求链表的中点
    let slow = head
    let fast = head

    while(fast !== null) {
        slow = slow.next
        fast = fast.next
        if(fast !== null) {
            fast = fast.next
        }
    }
    const temp = slow.next
    slow.next = null
    const left = sortList(head)
    const right = sortList(temp)

    // 合并两个有序的链表
    const newHead = merge(left, right)

    return newHead
}

function merge(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1

    const newHead = new ListNode(0)
    let cur = newHead
    while(l1 && l2) {
        if(l1.val < l2.val) {
            const node = l1.next
            cur.next = l1
            l1.next =  null
            l1 = node
            cur = cur.next
        }else{
            const node = l2.next
            cur.next = l2
            l2.next =  null
            l2 = node
            cur = cur.next
        }
    }

    while(l1 !== null) {
        cur.next = l1
        l1 = l1.next
        cur = cur.next
        cur.next = null
    }

    while(l2 !== null) {
        cur.next = l2
        l2 = l2.next
        cur = cur.next
        cur.next = null
    }

    return newHead.next
}