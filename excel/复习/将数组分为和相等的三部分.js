function canThreePartsEqualSum(arr) {
    let sum = 0
    for(let i = 0, len = arr.length; i < len; i++) sum += arr[i]

    if(sum % 3) return false

    const split = sum / 3

    return backtracking(arr, 0, 0, split)
} 

function backtracking(arr, start, count, target) {
    if(start > arr.length) return false

    if(start === arr.length) {
        if( count === 3 ){
            return true
        }
        return false
    }

    let index = start
    let sum = 0
    while(index < arr.length) {
        sum += arr[index]
        if(sum === target) {
            const flag = backtracking(arr, index + 1, count + 1, target)
            if(flag) return true
        }
        index++
    }
    return false
}