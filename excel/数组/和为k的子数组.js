// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

// 示例 1 :

// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

// prev[i] - prev[j - 1] === k
// 前缀和问题

// 滑动窗口求解
function subarraySum(nums, k) {
    let prev = 0
    let ans = 0
    const map = { '0': 1 }

    for(const num of nums) {
        prev += num

        if(map[prev - k]) {
            ans += map[prev - k]
        }

        if(map[prev]) {
            map[prev] = map[prev] + 1
        }else{
            map[prev] = 1
        }
    }

    return ans
}

subarraySum(
    [1,2,3],
    3
)