function search(nums, target) {
    const len = nums.length

    if(!len) return -1
    if(len === 1) return nums[0] === target ? 0 : -1

    let left = 0, right = len - 1

    while(left <= right) {
        const mid = ((left + right) >>> 1) | 0
        if(nums[mid] === target) return mid

        if(nums[mid] >= nums[left]) {
            // 说明在左边
            if(target >= nums[left] && target < nums[mid]) right = mid - 1
            else left = mid + 1
        }else{
            if(target > nums[mid] && target <= nums[nums.length - 1]) left = mid + 1
            else right = mid - 1
        }
    }
    return -1
}