function subarraySum(nums, k) {
    const len = nums.length

    const hashMap = new Map()
    let sum = 0
    let result = 0
    hashMap.set(0, 1)
    for(let i = 0; i < len; i++) {
        sum += nums[i]
        if(hashMap.has(sum - k)) {
            result += hashMap.get(sum - k)
        }

        hashMap.set(sum, (hashMap.get(sum) || 0) + 1)
    }
    return result
}