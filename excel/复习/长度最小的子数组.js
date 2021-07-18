function minSubArrayLen(target, nums) {
    let sum = 0
    let fast = 0
    let  slow = 0

    const len = nums.length

    if(len === 1) return nums[0] >= target ? 1 : 0

    let minLength = 0

    while(fast < len) {
        sum += nums[fast]

        if(sum >= target) {
            while(sum >= target){
                minLength = !minLength ? fast - slow  + 1 : Math.min(minLength,  fast - slow + 1)
                sum -= nums[slow]
                slow++
            }
        }
        fast++
    }
    return minLength
}