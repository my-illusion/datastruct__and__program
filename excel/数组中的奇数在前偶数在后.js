function sortArray(arr) {
    if(!arr || arr.length < 2) return arr

    let pHead = 0,
        pTail = arr.length - 1;
    
    while(pHead < pTail){
        while(pHead < pTail && arr[pHead] & 1){
            pHead++
        }

        while(pHead < pTail && !(arr[pTail] & 1)) {
            pTail--
        }

        if(pHead < pTail) {
            const temp = arr[pTail]
            arr[pTail] = arr[pHead]
            arr[pHead] = temp
        }
    }

    return arr
}

console.log(sortArray(
    [2, 3, 4, 5, 6, 7, 8, 9]
))