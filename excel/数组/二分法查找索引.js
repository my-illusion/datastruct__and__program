function searchBinary(nums, target) {
    let left = 0;
    let right = nums.length

    while(left < right) {
        const mid = ((left + right) / 2) >>> 0
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] > target){
            right = mid
        }else {
            left = mid + 1
        }
    }

    return -1
}

// console.log(
//     searchBinary(
//         [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7],
//         8
//     )
// )

// 查找左边界
function lowerBound(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        const mid = ((left +  right) / 2) >>> 0;

        if(nums[mid] >= target) {
            right = mid
        }else{
            left = mid + 1
        }
    }

    return left
}

// console.log(
//     lowerBound(
//         [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7],
//         4
//     )
// )

function upperBound(nums, target) {
    let left = 0
    let right = nums.length

    while(left < right){
        const mid = ((left + right) / 2) >>> 0

        if(nums[mid] > target) {
            right = mid
        }else{
            left = mid + 1
        }
    }

    return left - 1
}

console.log(
    upperBound(
        [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7],
        0
    )
)