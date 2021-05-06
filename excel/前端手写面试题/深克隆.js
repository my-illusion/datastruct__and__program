// dfs
function cloneDeep(target){
    const cycleMap = new Map();

    function baseClone(target){
        if(!isObject(target)) return target

        if(target instanceof Date) {
            return new Date(target)
        }

        if(target instanceof RegExp) {
            const clone = new RegExp(target.source, target.flags)
            clone.lastIndex = target.lastIndex
            return clone
        }

        if(cycleMap.has(target)) return cycleMap.get(target);

        const result = new target.constructor;

        cycleMap.set(target, result)

        const keys = Object.keys(target)

        for(let i = 0, len = keys.length; i < len; i++) {
            result[keys[i]] = baseClone(target[keys[i]])
        }

        return result
    }

    return baseClone(target)
}

function isObject(target) {
    return target !== null && typeof target === 'object'
}

// bfs
function cloneDeepBfs(target) {
    if(!isObject(target)) return target

    const queue = [target]

    const cycleMap = new Map()

    while(queue.length) {
        const curData = queue.shift()

        let obj

        if(cycleMap.has(curData)) {
            obj = cycleMap.get(curData)
        }else{
            obj = new curData.constructor
            cycleMap.set(curData, obj)
        }

        const keys = Object.keys(curData)

        for(const key of keys) {
            if(!isObject(curData[key])) {
                obj[key] = curData[key]
                continue
            }

            const toBeCloned = curData[key]
            if(toBeCloned instanceof Date) {
                obj[key] = new Date(toBeCloned)
                continue
            }

            if(toBeCloned instanceof RegExp) {
                obj[key] = new RegExp(toBeCloned.source, toBeCloned.flags)
                obj[key].lastIndex = toBeCloned.lastIndex
                continue
            }

            if(cycleMap.has(toBeCloned)) {
                obj[key] = cycleMap.get(toBeCloned)
            }else{
                const temp = new toBeCloned.constructor
                cycleMap.set(toBeCloned, temp)
                obj[key] = temp
            }

            queue.push(toBeCloned)
        }
    }

    return cycleMap.get(target)
}

const test = {
    a: 1,
    b: {
        c: 3
    }
}

const clone = cloneDeepBfs(test)

console.log(clone)