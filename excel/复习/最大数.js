function largestNumber(nums) {
    nums.sort((a, b) => (a + '' + b) - (b + '' + a))
    if(nums[0] === 0) return 0
    return nums.join("")
}