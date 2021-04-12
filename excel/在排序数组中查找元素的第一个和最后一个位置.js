// 二分查找

function searchRange(nums, target) {
    const start = binarySearch(nums, 0, nums.length - 1, target, true)
    if(start === -1) return [-1, -1]
    let end = start

    while(nums[++end] === nums[start]);
    return [start, end - 1]
}

/**
 * [start, end] 左闭右闭区间 
 * @param {*} nums 
 * @param {*} target 
 * @param {*} isPre  查找开始位置还是结束位置
 */
function binarySearch(nums, start, end, target, isPre) {
    if(start > end) return -1
    // 找到中间值
    const middle = start + ((end - start) >> 1)

    if(nums[middle] > target) {
        return binarySearch(nums, start, middle - 1, target, isPre)
    }else if(nums[middle] < target) {
        return binarySearch(nums, middle + 1, end, target, isPre)
    }else{
        if(isPre) {
            if(middle > 0){
                if(nums[middle - 1] === target)
                    return binarySearch(nums, start, middle - 1, target, isPre)
                return middle
            }else{
                return 0
            }
        }else{
            if(middle < nums.length - 1){
                if (nums[middle + 1] === target)
                    return binarySearch(nums, middle + 1, end, target, isPre)
                return middle
            }else{
                return nums.length - 1
            }
        }
    }
}

console.log(
    searchRange(
        [1, 1, 2, 3, 3, 3],
        2
    )
)

