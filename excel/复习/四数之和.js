function fourSum(nums, target) {
    const result = []
    const len = nums.length
    nums.sort((a, b) => a - b)
    for(let k = 0; k < len; k++) {
        if(k > 0 && nums[k] === nums[k-1]) continue

        for(let i = k + 1; i < len; i++) {
            if(i > k + 1 && nums[i] === nums[i-1]) continue

            let left = i + 1
            let right = len - 1

            while(left < right) {
                const currentTotal = nums[k] + nums[i] + nums[left] + nums[right]
                if(currentTotal > 0) {
                    right--
                }else if(currentTotal < 0) {
                    left++
                }else{
                    result.push([
                        nums[k], nums[i], nums[left], nums[right]
                    ])

                    while(left < right && nums[left] === nums[left + 1]) left++
                    while(left < right && nums[right] === nums[right - 1]) right--

                    left++
                    right--
                }
            }
        }
    }
}