// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。



// function removeDuplicates(nums) {
//     const len = nums.length

//     if(len < 2) return nums

//     let slow = -1
//     let fast = 0

//     while(fast < len) {
//         if(slow === -1 || nums[fast] !== nums[slow]) {
//             nums[++slow] = nums[fast]
//         }
//         fast++
//     }

//     return slow + 1
// }

// 删除数组使每个元素至多出现两次
function removeDuplicates(nums) {
    const len = nums.length
    if(len < 2) return nums
    
    let slow = -1
    let fast = 0
    let count = 0
    while(fast < len) {
        if(slow === -1) {
           nums[++slow] = nums[fast]
           count++
        }else{
            if(nums[slow] !== nums[fast]) {
                nums[++slow] = nums[fast]
                count = 1
            }else {
                if(count < 2) {
                    nums[++slow] = nums[fast]
                    count++
                }
            }
        }
        fast++
    }
    return slow
}