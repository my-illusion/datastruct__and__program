function mergeSort(nums) {
    const len = nums.length

    if(len < 2) return nums

    const mid = len >>> 1

    const a = mergeSort(nums.slice(0, mid))
    const b = mergeSort(nums.slice(mid))

    return merge(a, b)
}

function merge(a, b) {
    const result = []

    let i = 0, j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]){
            result.push(a[i])
            i++
        }else {
            result.push(b[j])
            j++
        }
    }

    while(i < a.length) result.push(a[i++]);
    while(j < b.length) result.push(b[j++])

    return result
}

console.log(
    mergeSort(
        [5, 3, 6, 9, 4, 2, 1, 0]
    )
)

