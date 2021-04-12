function trap(height) {
    // 对于i位置能接的最大的雨水 === 左边高度的最大值 和 右边高度的最大值 的 最小值 - height[i]
    const len = height.length
    const leftMax = new Array(len).fill(0)
    leftMax[0] = height[0]
    for(let i = 1; i <= len - 1; i++) leftMax[i] = Math.max(leftMax[i - 1], height[i])
    
    const rightMax = new Array(len).fill(0)
    rightMax[len - 1] = height[len - 1]
    for(let i = len - 2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i + 1], height[i])
    let ans = 0
    for(let i = 0; i < len; i++) {
        ans += Math.min(rightMax[i], leftMax[i]) - height[i]
    }
    return ans
}