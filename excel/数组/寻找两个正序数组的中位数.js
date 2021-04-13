function findMedianSortedArrays(num1, num2) {
    const total = num1.length + num2.length
    console.log(total, total >> 1) // 5 6 7 5
    if(total & 1) {
        
        return findMinKElement(num1, num2, (total + 1) >> 1)
    }else{
        return (findMinKElement(num1, num2, total >> 1) + findMinKElement(num1, num2, (total >> 1) + 1)) / 2
    }
}

function findMinKElement(num1, num2, k) {
    const len1 = num1.length
    const len2 = num2.length
    let index1 = 0, index2 = 0

    while(true) {
        if(index1 === len1) {
            // 说明num1已经到头了, 就去num2中第k个最小的数 x - index2 + 1 = k
            return num2[index2 + k - 1]
        }

        if(index2 === len2) {
            return num1[index1 + k - 1]
        }
        console.log(k)
        if(k === 1) {
            return Math.min(num1[index1], num2[index2])
        }

        const newIndex1 = Math.min(index1 + ((k >> 1) - 1), len1 - 1)
        const newIndex2 = Math.min(index2 + ((k >> 1) - 1), len2 - 1)

        let pivot1 = num1[newIndex1]
        let pivot2 = num2[newIndex2]

        if(pivot1 <= pivot2) {
            k -= newIndex1 - index1 + 1
            index1 = newIndex1 + 1
        }else{
            k -= newIndex2 - index2 + 1
            index2 = newIndex2 + 1
        }
    }
}

console.log(
    findMinKElement(
        [0,0,0,0,0],
        [-1,0,0,0,0,0,1],
        7
    )
)