function twoSum(nums, target) {
    const hashMap = new Map()

    for(let i = 0, len = nums.length; i < len; i++) {
        const left = target - nums[i]
        if(hashMap.has(left)) {
            return [
                hashMap.get(left),
                i
            ]
        }else{
            hashMap.set(nums[i], i)
        }
    }

    return []
}