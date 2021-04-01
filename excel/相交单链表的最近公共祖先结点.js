function getIntersectionNode(headA, headB) {
    // 首先获取两个链表的长度
    const lenA = getListLength(headA)
    const lenB = getListLength(headB)

    let lendiff = lenA - lenB

    let pLongHead = headA
    let pShortHead = headB

    if(lenA < lenB) {
        pLongHead = headB
        pShortHead = headA
        lendiff = lenB - lenA
    }

    // 长列表前进lendiff步
    while(lendiff--) {
        pLongHead = pLongHead.next
    }

    while(pLongHead !== pShortHead) {
        pLongHead = pLongHead.next
        pShortHead = pShortHead.next
    }

    return pLongHead
}

function getListLength(head) {
    let len = 0
    while(head !== null) {
        len++
        head = head.next
    }
    return len
}