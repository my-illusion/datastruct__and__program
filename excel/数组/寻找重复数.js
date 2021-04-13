// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

//  

// 示例 1：

// 输入：nums = [1,3,4,2,2]
// 输出：2
// 示例 2：

// 输入：nums = [3,1,3,4,2]
// 输出：3
// 示例 3：

// 输入：nums = [1,1]
// 输出：1
// 示例 4：

// 输入：nums = [1,1,2]
// 输出：1

// 快慢指针
function findDuplicate(nums) {
    let slow = 0
    let fast = 0

    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while(slow !== fast)

    slow = 0
    while(slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}

// 二分查找
function findDuplicate(nums) {
    
}