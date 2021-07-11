// function trap(height) {
//     const leftMax = []
//     leftMax[0] = height[0]
//     for(let i = 1, len = height.length; i < len; i++) {
//         if(height[i] > leftMax[i-1]) {
//             leftMax[i] = height[i]
//         }else{
//             leftMax[i] = leftMax[i-1]
//         }
//     }

//     const rightMax = []
//     rightMax[height.length - 1] = height[height.length - 1]
//     for(let i = height.length - 2; i >= 0; i--) {
//         if(height[i] > rightMax[i+1]) {
//             rightMax[i] = height[i]
//         }else{
//             rightMax[i] = rightMax[i+1]
//         }
//     }

//     let result = 0
//     for(let i = 0; i < height.length; i++) {
//         result += Math.min(leftMax[i], rightMax[i]) - height[i]
//     }

//     return result
// }


// 双指针解决接雨水问题
function trap(height) {
    const len = height.length
    if(len < 2) return 0
    let left = 0, right = len - 1, leftMax = 0, rightMax = 0;
    let result = 0
    while(left < right){
        const heightLeft = height[left]
        const heightRight = height[right]

        leftMax = Math.max(leftMax, heightLeft)
        rightMax = Math.max(rightMax, heightRight)

        if(leftMax < rightMax) {
            left++
            result += leftMax - heightLeft
        }else{
            right--
            result += rightMax - heightRight
        }
    }
    return result
}
