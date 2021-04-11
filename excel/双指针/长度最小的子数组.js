function minSubArrayLen(target, nums) {
    let start = 0;
    let end = 0;
    const len = nums.length;
    let sum = 0
    let ans = -Infinity

    // 不断增加post的大小使其和 >= target
    while(end < len) {
        sum += nums[end]
        while(sum >= target) {
            ans = Math.max(ans, end - start + 1)
            // 不断收紧start
            sum -= start
            start++
        }
        end++
    }

    return ans === -Infinity ? 0 : ans
}