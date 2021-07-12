// function isPalindrome(head) {
//     if(!head) return false
//     let left = head
//     function helpers(head) {
//         if(!head.next) {
//             const temp = left.val === head.val
//             left = left.next
//             return temp
//         }else{
//             const flag = helpers(head.next)
//             if(!flag) return flag
//             const temp = left.val === head.val
//             left = left.next
//             return temp
//         }
//     }

//     return helpers(head)
// }

// O(n)的时间复杂度 和 O(1)的空间复杂度解决该问题
function isPalindrome(head) {
    
}