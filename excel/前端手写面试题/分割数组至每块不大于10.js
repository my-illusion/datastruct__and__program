function split(nums, target) {
    const result = []
    const left = nums.reduce((prev, next) => {
        if(prev[1] + next <= target) {
            prev[0].push(next)
            prev[1] += next
            return prev
        }else{
            if(prev[0].length){
                result.push(prev[0].concat())
            }
            return [[next], next]
        }
    }, [[], 0])
    if(left[0].length){
        result.push(left[0])
    }
    return result
}


console.log(
    split(
        [2],
        10
    )
)