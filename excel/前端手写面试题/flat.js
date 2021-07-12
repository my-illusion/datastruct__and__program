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


function baseFlatten(array, depth) {
    const result = []

    if(array == null) return result

    for(const value of array) {
        if(depth > 0 && isFlatten(value)) {
            if(depth > 1) {
                result.push(...baseFlatten(value, --depth))
            }else{
                result.push(...value)
            }
        }else{
            result.push(value)
        }

    }

    return result
}

function isFlatten(value){
    return Array.isArray(value) || isArguments(value) || !!(value && value[Symbol.isConcatSpreadable])
}

function isArguments(value) {
    return value !== null && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Arguments]'
}

console.log(baseFlatten(str, Infinity))