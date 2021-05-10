Array.prototype.myFlat = function(depth = Infinity) {
    const ret = []
    for(const item of this) {
        if(depth && Array.isArray(item)) {
            ret.push(...item.myFlat(--depth))
        }else{
            ret.push(item)
        }
    }
    return ret
}

const str = [1, [2, [3, 4, [6]], [5]]]

console.log(str.myFlat(3))