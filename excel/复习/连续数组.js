// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

//  

// 示例 1:

// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
// 示例 2:

// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。

// 1 <= nums.length <= 105
// nums[i] 不是 0 就是 1

function findMaxLength(nums) {
    const len = nums.length

    let res = 0

    const map = new Map()

    const a = new Array(len).fill(0)
    map.set(0, -1)
    for(let i = 0; i < len; i++){
        if(i > 0) a[i] = a[i-1] + (nums[i] === 0 ? -1 : 1)
        else a[i] = (nums[i] === 0 ? -1 : 1)
    }

    for(let i = 0; i < len; i++) {
        if(map.has(a[i])) {
            ans = Math.max(ans, i - map.get(a[i]))
        }else{
            map.set(
                a[i],
                i
            )
        }
    }

    return res
}