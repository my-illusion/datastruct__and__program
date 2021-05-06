function canCross(stones) {
    if(stones[1] > 1) return false
    const hashMap = new Map()
    return tracking(stones, 1, 1, hashMap)
}

/**
 * 当前的位置一定是某个石头的位置
 */
function tracking(stones, index, k, hashMap) {
    
    if(index === stones.length - 1) return true

    if(hashMap.has(`${index}-${k}`)) return false
   
    for(let i = k + 1; i >= k - 1; i--) {
        if(i <= 0) continue
        // 寻找下一个可能的落脚点
        const next = canJump(stones, index, i, hashMap)

        if(next) {
            const flag = tracking(stones, next, i, hashMap) 
            if(flag) return true
        }
        hashMap.set(`${index}-${i}`, 1)
    }
    return false
}

function canJump(stones, index, k) {
    for(let i = index + 1; i < stones.length; i++) {
        if(stones[index] + k === stones[i]) {
            return i
        }
    }
    return false
}

console.log(
    canCross(
        [0,2,4,5,6,8,9,11,14,17,18,19,20,22,23,24,25,27,30]
    )
)

// 使用动态规划也可以解决