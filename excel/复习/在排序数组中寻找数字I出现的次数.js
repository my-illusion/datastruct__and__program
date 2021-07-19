function search(nums, target) {
    const len = nums.length

    let left = 0
    let right = len
    while(left < right) {
        const mid = ((left + right - 1) >>> 1) | 0

        if(nums[mid] === nums[target]) {
            // 寻找所有相等的元素 计数并返回
            let count = 1
            let j = mid - 1
            while(j >= 0 && nums[j] === target) {
                j--
                count++
            }

            j = mid + 1
            while(j <= len - 1 && nums[j] === target) {
                j++
                count++
            }
            return count

        }else if(nums[mid] > nums[target]) {
            right = mid
        }else{
            left = mid + 1
        }
    }
}