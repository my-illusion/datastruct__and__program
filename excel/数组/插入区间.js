// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

//  

// 示例 1：

// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]
// 示例 2：

// 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]
// 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
// 示例 3：

// 输入：intervals = [], newInterval = [5,7]
// 输出：[[5,7]]
// 示例 4：

// 输入：intervals = [[1,5]], newInterval = [2,3]
// 输出：[[1,5]]
// 示例 5：

// 输入：intervals = [[1,5]], newInterval = [2,7]
// 输出：[[1,7]]

function insert(intervals, newInterval) {
    const len = intervals.length
    if(!len) return [ newInterval ]

    let i
    for(i = 0; i < len; i++) {
        if(intervals[i][0] < newInterval[0]){
            continue
        }else {
            break
        }
    }
    i--

    intervals.splice(i + 1, 0, newInterval)

    i = i >= 0 ? i : 0
    const merge = intervals.slice(0, i)

    for(; i < intervals.length; i++) {
        if(!merge.length || intervals[i][0] > merge[merge.length - 1][1]) {
            merge.push(intervals[i])
        }else{
            merge[merge.length - 1][1] = Math.max(merge[merge.length - 1][1], intervals[i][1])
        }
    }

    return merge
}

console.log(
    insert(
        [[1,5],[6,8]],
[0,9]
    )
)