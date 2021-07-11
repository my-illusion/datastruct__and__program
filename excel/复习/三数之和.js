function threeSum(nums) {
    const len = nums.length
    nums.sort((a, b) => a - b)
    if(!len) return []
    
    const result = []
    for(let i = 0; i < len; i++) {
        if(nums[i] > 0) return result

        if(i > 0 && nums[i] === nums[i-1]) continue

        let left = i + 1
        let right = len - 1

        while(left < right) {
            const currentTotal = nums[i] + nums[left] + nums[right]
            if(currentTotal > target) {
                right--
            }else if(currentTotal < target) {
                left++
            }else{
                result.push(
                    [nums[i], nums[left], nums[right]]
                )
                while(left < right && nums[right] === nums[right -1]) right--;
                while(left < right && nums[left] === nums[left + 1]) left++;
                right--
                left++
            }
        }
    }
    return result
}