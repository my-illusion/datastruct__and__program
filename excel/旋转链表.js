// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

function rotateRight(head, k) {
    if(!head || !head.next || !k) return head
    let len = 1, cur = head;
    while(cur.next) {
        len++
        cur = cur.next
    }

    let move = len - k % len;  //  1 2 3 4
    cur.next = head;
    while(move){
        cur = cur.next;
        move--;
    }
    let ans = cur.next;
    cur.next = null;
    return ans;
}