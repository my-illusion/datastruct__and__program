// 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

// 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

// 注意，不管是什么情况下，你都无法跳到数组之外。

//  

// 示例 1：

// 输入：arr = [4,2,3,0,3,1,2], start = 5
// 输出：true
// 解释：
// 到达值为 0 的下标 3 有以下可能方案： 
// 下标 5 -> 下标 4 -> 下标 1 -> 下标 3 
// 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3 
// 示例 2：

// 输入：arr = [4,2,3,0,3,1,2], start = 0
// 输出：true 
// 解释：
// 到达值为 0 的下标 3 有以下可能方案： 
// 下标 0 -> 下标 4 -> 下标 1 -> 下标 3
// 示例 3：

// 输入：arr = [3,0,2,1,2], start = 2
// 输出：false
// 解释：无法到达值为 0 的下标 1 处。 

// 看起来像是dfs
// 唯一难判断的就是结束条件
// 应该就是又跳回了某一位置且该位置的所有的走法都已经走过了
function canReach(arr, start) {
    const seen = new Map()

    return helpers(arr, start, seen)
}

function helpers(arr, curIndex, seen) {
    if(arr[curIndex] === 0) return true

    if(seen.has(curIndex) && seen.get(curIndex).every(Boolean)) return false

    if(isValidIndex(curIndex - arr[curIndex], arr) && (!seen.has(curIndex) || !seen.get(curIndex)[0] )) {
        seen.set(curIndex, [1, 0])
        const flag = helpers(arr, curIndex - arr[curIndex], seen)
        if(flag) return true
    }

    if(isValidIndex(curIndex + arr[curIndex], arr) && (!seen.has(curIndex) || !seen.get(curIndex)[1] )) {
        seen.set(curIndex, [1, 1])
        const flag = helpers(arr, curIndex + arr[curIndex], seen)
        if(flag) return true
    }
    return false
}

function isValidIndex(index, arr) {
    return index >= 0 && index <= arr.length - 1
}

console.log(
    canReach(
        [3,0,2,1,2],
        2
    )
)
