function search(nums, target) {
    // 旋转后的数组满足前半部分的值一定大于后半部分的值
    const start = nums[0]
    const end = nums[nums.length - 1]

    if(start <= end) {
        // 没有旋转
        // 直接二分查找
        return binarySearch(nums, 0, nums.length - 1, target)
    }

    // 找到截断的索引值
    let i = 0, j = nums.length - 1;
    while(true){
        const k = i + ((j - i) >> 1)
        if(nums[k] > start){
            i = k + 1
            if(nums[i] < start) {
                i--
                break
            }
        }else if(nums[k] < start){
            j = k - 1
            if(nums[j] > start) {
                i = j
                break
            }
        }else{
            i = 0
            break
        }
    }

    let k = i
    
    // 判断值是在那部分里边
    if(target >= start) {
        return binarySearch(nums, 0, k, target)
    }else{
        return binarySearch(nums, k + 1, nums.length - 1, target)
    }
}

function binarySearch(nums, start, end, target){
    if(start > end) return -1

    const middle = start + ((end - start) >> 1)

    if(nums[middle] > target) {
        return binarySearch(nums, start, middle - 1, target)
    }else if(nums[middle] < target) {
        return binarySearch(nums, middle + 1, end, target)
    }else{
        return middle
    }
}

console.log(search(
    [3,1],
0
))