// 有一堆石头，每块石头的重量都是正整数。

// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0。

// [2,7,4,1,8,1] ------> 1

/**
 * 尽可能剩下的最小 就是说把这堆石头尽可能的分成两堆 也就是所有石头的重量的一半
 * @param {*} stones 
 */

function lastStoneWeightII(stones) {
    const len = stones.length

    if(len == 0) return 0
    if(len == 1) return stones[0]

    const total = stones.reduce((a, b) => a + b)
    const target = total >> 1

    const dp = new Array(15001).fill(0)

    for(let i = 0; i < len; i++) {
        for(let j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }

    return total - dp[target] - dp[target]
}