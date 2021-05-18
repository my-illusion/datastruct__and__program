// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 首先实现使每个元素最多出现一次的
// function removeDuplicates(nums) {
//     let slow = -1
//     let fast = 0

//     while(fast < nums.length) {
//         if(slow >= 0 && nums[fast] === nums[slow]) {
//             fast++
//         }else{
//             nums[++slow] = nums[fast++]
//         }
//     }
//     return slow + 1
// }

// 实现每个元素最多出现两次的
function removeDuplicates(nums) {
    let slow = -1
    let fast = 0
    const dup_count = {} // 记录每个元素出现重复的次数
    while(fast < nums.length) {
        if(slow >= 0 && nums[fast] === nums[slow]) {
            if(dup_count[nums[slow]] >= 2) {
                // 已经出现了两次的重复 当前这个要删除
                fast++
            }else{
                dup_count[nums[fast]]++
                nums[++slow] = nums[fast++]
            }
        }else{
            dup_count[nums[fast]] = 1
            nums[++slow] = nums[fast++]
        }
    }
    console.log(nums)
    return slow + 1
}

// 优化之后的版本
function dup(nums) {
    let slow = 0
    let fast = 1
    let prevCount = 1
    while(fast < nums.length) {
        if(nums[fast] === nums[slow]) {
            if(prevCount < 1) {
                prevCount++
                slow++
            }

            fast++
        }else{
            prevCount = 1
            nums[++slow] = nums[fast++]
        }
    }
    nums.length = slow + 1
    console.log(nums)
    return slow + 1
}

console.log(
    dup([1, 1, 2, 2, 2, 3, 3, 3])
)