function findMedianSortedArrays(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length

    const total = len1 + len2
    if(total % 2) {
        // 奇数
        return findKnthElementInTwoArray(nums1, nums2, (total+1) >>> 1)
    }else{
        return ( findKnthElementInTwoArray(nums1, nums2, total >>> 1) + findKnthElementInTwoArray(nums1, nums2, (total >>> 1) + 1) ) / 2
    }
}

function findKnthElementInTwoArray(nums1, nums2, k) {
    let index1 = 0
    let index2 = 0
    const len1 = nums1.length
    const len2 = nums2.length

    while(true) {
        if(index1 === len1) {
            return nums2[index2 + k - 1]
        }

        if(index2 === len2) {
            return nums1[index1 + k - 1]
        }

        if(k === 1) {
            return Math.min(nums1[index1], nums2[index2])
        }

        const newIndex1 = Math.min(len1 - 1, index1 + (k >>> 1) - 1)
        const newIndex2 = Math.min(len2 - 1, index2 + (k >>> 1) - 1)

        if(nums1[newIndex1] < nums2[newIndex2]) {
            k -= newIndex1 - index1 + 1
            index1 = newIndex1 + 1
        }else{
            k -= newIndex2 - index2 + 1
            index2 = newIndex2 + 1
        }
    }
}