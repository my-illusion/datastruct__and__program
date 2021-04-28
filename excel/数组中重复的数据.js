// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

// 找到所有出现两次的元素。

// 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

// 示例：

// 输入:
// [4,3,2,7,8,2,3,1]

// 输出:
// [2,3]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = []
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] < 0)continue
      const shouldIndex = nums[i] - 1
      // console.log(shouldIndex, i, '---shouldIndex')
      if(shouldIndex !== i) {
          // 交换到对应的位置上
          if(nums[shouldIndex] > 0) {
              // 当前位置没有被替换过 替换
              nums[i] = nums[shouldIndex]
              nums[shouldIndex] = -1
              i--
          }else{
              nums[shouldIndex] = nums[shouldIndex] - 1
              nums[i] = 0
          }
      }else{
          nums[i] = -1
      }
  }

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === -2) {
          result.push(i + 1)
      }
  }

  return result
};