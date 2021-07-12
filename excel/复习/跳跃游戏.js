// function canJump(nums) {
//     const len = nums.length

//     if(len < 1) return true

//     let cover = 0
//     for(let i = 0; i <= cover; i++) {
//         cover = Math.max(nums[i] + i, cover)
//         if(cover >= len - 1) return true
//     }
//     return false
// }

// 给定一个非负整数数组，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

// function jump(nums) {
//     // 设dp[i]表示跳到i位置所需要的最小步骤
//     const len = nums.length

//     const dp = new Array(len).fill(Infinity)

//     dp[0] = 0

//     for(let i = 1; i < len; i++) {
//         for(let j = 0; j <= i - 1; j++) {
//             if(nums[j] + j >= i) {
//                 dp[i] = Math.min(dp[i], dp[j] + 1)
//             }
//         }
//     }

//     return dp[len - 1]
// }


function jump(nums) {
    const len = nums.length

    if(len < 2) return 0

    let currentDistance = 0
    let nextDistance = 0
    let ans = 0

    for(let i = 0; i < len; i++) {
        // 不断更新下一次可以达到的最大距离
        nextDistance = Math.max(nextDistance, i + nums[i])
        // 如果当前到达了当前可以到达的最远距离
        if(i === currentDistance) {
            if(i !== len - 1) {
                ans++
                currentDistance = nextDistance
                if(nextDistance >= len - 1) break
            }else{
                break
            }
        }
    }
    return ans
}

// class Solution {
//     public:
//         int jump(vector<int>& nums) {
//             if (nums.size() == 1) return 0;
//             int curDistance = 0;    // 当前覆盖最远距离下标
//             int ans = 0;            // 记录走的最大步数
//             int nextDistance = 0;   // 下一步覆盖最远距离下标
//             for (int i = 0; i < nums.size(); i++) {
//                 nextDistance = max(nums[i] + i, nextDistance);  // 更新下一步覆盖最远距离下标
//                 if (i == curDistance) {                         // 遇到当前覆盖最远距离下标
//                     if (curDistance != nums.size() - 1) {       // 如果当前覆盖最远距离下标不是终点
//                         ans++;                                  // 需要走下一步
//                         curDistance = nextDistance;             // 更新当前覆盖最远距离下标（相当于加油了）
//                         if (nextDistance >= nums.size() - 1) break; // 下一步的覆盖范围已经可以达到终点，结束循环
//                     } else break;                               // 当前覆盖最远距离下标是集合终点，不用做ans++操作了，直接结束
//                 }
//             }
//             return ans;
//         }
//     };


function canReach(arr, start) {
    const hasSeen = new Map()

    return helpers(arr, start, hasSeen)
}

function helpers(arr, start, hasSeen) {
    if(arr[start] === 0) return true

    if(hasSeen.get(start) === 2) return false

    if(!hasSeen.get(start)) {
        // 初次到达选择左边
        const nextStart = start - arr[start]
        hasSeen.set(start, 1)
        if(nextStart >= 0) {
            const flag = helpers(arr, nextStart, hasSeen)
            if(flag) return true
        }
    }
    
    if(hasSeen.get(start) === 1){
        // 第二次到达选择右边
        const nextStart = start + arr[start]
        if(nextStart < arr.length) {
            hasSeen.set(start, 2)
            const flag = helpers(arr, nextStart, hasSeen)
            if(flag) return true
            hasSeen.set(start, 0)
        }
    }

    return false
}

