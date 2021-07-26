function intersection(nums1, nums2) {
    const map = new Map()

    for(const value of nums1) {
        if(!map.has(value)) {
            map.set(value, 1)
        }
    }

    const result = []

    for(const value of nums2) {
        if(map.get(value) === 1){
            result.push(value)
            map.set(value, 2)
        }
    }

    return result
}