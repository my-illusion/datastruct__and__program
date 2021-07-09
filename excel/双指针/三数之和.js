// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

// left  middle right
function threeSum(nums) {
    const result = []

    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) return result

        if(i > 0 && nums[i] === nums[i-1]) continue

        let left = i + 1
        let right = nums.length - 1
        
        while(right > left) {
            if(nums[left] + nums[i] + nums[right] > 0) right--
            else if(nums[left] + nums[i] + nums[right] < 0) left++
            else {
                result.push(
                    [nums[i], nums[left], nums[right]]
                )

                while( right > left && nums[right] === nums[--right] );
                while( right > left && nums[left] === nums[++left]);
            }
        }
    }
    return result
}

function threeSum(nums) {
    const result = []
    nums.sort((a, b) => a - b)
    for(let i = 0, len = nums.length; i < len - 2; i++) {
        if(nums[i] > 0) return result
        if(i > 0 && nums[i] === nums[i-1]) continue

        let left = i + 1
        let right = len - 1

        while(left < right) {
            const curSum = nums[i] + nums[left] + nums[right]
            if(curSum > 0) {
                right--
            }else if(curSum < 0) {
                left++
            }else{
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ])

                while(left < right && nums[right] === nums[--right]);
                while(left < right && nums[left] === nums[++left]);
            }
        }
    }

    return result
}