function findTwoNums(arr) {
    const len = arr.length
    if(len < 2) return []

    for(let i = 0; i < len; i++) {
        if(arr[i] <= 0) continue
        const index = arr[i] - 1
        if(arr[index] < 0) {
            // 说明之前出现过
            arr[index]--
            arr[i] = 0
        }else{
            // 之前没有出现过
            // 交换这两个位置的元素 并将该位置的元素设置为-1
            swap(arr, i, index)
            arr[index] = -1
            i--
        }
    }
    console.log(arr)
    const result = []
    arr.forEach((item, index) => {
        if(item === -2) {
            result.push(index + 1)
        }
    })
    return result
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(findTwoNums(
    [
        3, 2, 2, 4, 5, 6, 4, 9, 7, 8, 7, 7
    ]
))