// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。

//  

// 现有一个链表 -- head = [4,5,1,9]，它可以表示为:

// 问题是无法获取上一个结点
// 怎么解决呢
// 链表中所有的值都是唯一的
// 我悟了
function deleteNode(node) {
    node.val = node.next.val
    node.next = node.next.next
}