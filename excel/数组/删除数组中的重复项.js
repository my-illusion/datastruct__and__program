function removeDuplicates(nums) {
    const len = nums.length
    if(len < 2) return nums
    let left = 0, right = 1;

    while(right < len) {
        if(nums[right] === nums[left]){
            right++
            continue
        }else{
            left++
            nums[left] = nums[right]
            right++
        }
    } 
    nums.length = left + 1
    return nums  
}

console.log(
    removeDuplicates(
        [1,2,2,2,3,3,4]
    )
)