function checkMoreThanHalf(arr) {
    const len =  arr.length
    if(len < 2) return -1
    let times = 1
    let result = arr[0]

    for(let i = 1; i < len; i++) {
        if(times === 0) {
            times = 1
            result = arr[i]
        }else if(arr[i] === result) {
            times++
        }else{
            times--
        }
    }

    return result
}

console.log(checkMoreThanHalf(
    [2 ,3 , 4, 5, 2, 2, 2, 2, 6, 2 ]
))