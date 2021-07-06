function split(nums, target) {
    const len = nums.length;

    if(len < 2) return nums;

    let pending = [];
    const result = [];

    let curSum = 0;

    for(let i = 0; i < len; i++) {
        if(curSum + nums[i] <= target) {
            curSum += nums[i]
            pending.push(nums[i])
        }else{
            if(pending.length) {
                result.push(pending)
                curSum = nums[i]
                pending = [nums[i]]
            }
        }
    }

    if(pending.length) {
        result.push(pending)
    }
    return result
}


console.log(
    split(
        [2, 1, 5, 6, 4, 1],
        10
    )
)