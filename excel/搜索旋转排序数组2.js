function search(nums, target) {
    const len = nums.length
    if(!len) return false
    if(len === 1) return nums[0] === target

    let l = 0, r = len - 1;
    while(l <= r) {
        const mid = l + ((r - l) >> 1)
        if(nums[mid] === target) return true

        if(nums[l] === nums[mid] && nums[r] === nums[mid]) {
            l++;
            r--
        }else if(nums[mid] >= nums[l]) {
            if(nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            }else{
                l = mid + 1
            }
        }else{
            if(nums[mid] < target && target <= nums[len - 1]) {
                l = mid + 1
            }else{
                r = mid - 1
            }
        }
    }

    return false
}