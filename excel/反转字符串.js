function reverseString(s) {
    const len = s.length
    if(len < 2) return s

    let left = 0
    let right = len - 1

    while(left < right) {
        swap(s, left, right)
        left++
        right--
    }
    return s
}

function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}