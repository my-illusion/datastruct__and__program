function merge(intervals) {
    const len = intervals.length
    if(len === 1) return intervals

    intervals.sort((a, b) => a[0] - b[0])

    const result = []

    for(let i = 0; i < len; i++) {
        if(!result.length || result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i])
        }else{
            result[result.length - 1][1] = Math.max( result[result.length - 1][1], intervals[i][1] )
        }
    }
    return result
}