/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */

 function threeSum(nums) {
    if(!nums.length) return []

    const result = []
    const path = []
    const cache = {}
    nums.sort()
    dfs(nums, 0, 0, path, result, cache)
    return result
 }

 function dfs(nums, start, total, path, result, cache){
     if(total === 0 && path.length === 3) {
        if(cache[`${path[0]}${path[1]}`]) return
        cache[`${path[0]}${path[1]}`] = true
        result.push(path.concat())
        return
     }else if(path.length > 2){
         return
     }else if(path.length === 2 && cache[`${path[0]}${path[1]}`]){
         console.log(11)
         return 
     }else{
         for(let i = start; i < nums.length; i++) {
             // 判断当前的i值是否已经遍历过
            //  if(cache[nums[i]]) return
             path.push(nums[i])
             dfs(nums, i + 1, total + nums[i], path, result, cache)
             path.pop()
         }
     }
 }

console.log(
    threeSum(
        [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
    )
)