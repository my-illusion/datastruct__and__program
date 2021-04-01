function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function partition(arr, start, end){
    const random = Math.floor(Math.random(end - start)) + start

    swap(arr, random, end)
    let small = start - 1
    for(let index = start; index < end; index++) {
        if(arr[index] < arr[end]){
            small++
            if(small !== index) {
                swap(arr, index, small)
            }
        }
    }

    small++
    swap(arr, small, end)
    return small
}

function quickSort(arr, start, end) {
    if(start >= end) return arr
    const middle = partition(arr, start, end)
    quickSort(arr, start, middle - 1)
    quickSort(arr, middle + 1, end)
    return arr
}

console.log(quickSort(
    [8, 5, 6, 4, 3, 2, 9, 3, 2, 8],
    0,
    9
))