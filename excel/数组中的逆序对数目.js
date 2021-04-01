function inversePairs(arr) {
    const len = arr.length
    if(len < 2) return 0

    const copy = [].concat(arr)
    return inversePairsCore(arr, copy, 0, len - 1)
}

function inversePairsCore(data, copy, start, end){
    if(start >= end) {
        copy[start] = data[start]
        return 0
    }
    const middle = start + ((end - start) >> 1)
    const left = inversePairsCore(copy, data, start, middle)
    const right = inversePairsCore(copy, data, middle + 1, end)

    let indexCopy = end
    let p1 = middle
    let p2 = end
    let count = 0

    while(p1 >= start && p2 >= middle + 1) {
        if(data[p1] > data[p2]) {
            // 构成逆序对
            count += p2 - middle
            copy[indexCopy--] = data[p1--]
        }else{
            copy[indexCopy--] = data[p2--]
        }
    }

    for(; p1 >= start; p1--){
        copy[indexCopy--] = data[p1]
    }
    for(; p2 > middle; p2--){
        copy[indexCopy--] = data[p2]
    }

    return count + left + right
}

console.log(
    inversePairs(
        [3, 2, 1]
    )
)