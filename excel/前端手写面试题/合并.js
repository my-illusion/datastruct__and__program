const source = [
    {id: 1, name: 'Alice', friends: ['Bob']},
    {id: 2, name: 'Bob', friends: []},
    {id: 5}
]
const updated = [
    {id: 2, name: 'Bob', friends: ['Alice']},
    {id: 3, name: 'Jack', friends: ['Alice', 'Bob']}
]
  
//   // 结果
//   [
//     {id: 1, name: 'Alice', friends: ['Bob']}
//     {id: 2, name: 'Bob', friends: ['Alice']},
//     {id: 3, name: 'Jack', friends: ['Alice', 'Bob']}
//   ]

const defaultOptions = {
    primaryKey: 'id',
    inplace: false
}

function baseShallowMerge(source, updated, options) {
    const primaryKey = options.primaryKey

    const mapSource = transformObjectToMap(source, primaryKey)

    for(const item of updated) {
        if(mapSource.has(item[primaryKey])) {
            mapSource.set(
                item[primaryKey],
                options.inplace ? 
                    Object.assign(mapSource.get(item[primaryKey]), item) 
                    :
                    {
                        ...mapSource.get(item[primaryKey]),
                        ...item
                    }
            )
        }else{
            options.inplace ? 
                source.push(item) 
                :
                mapSource.set(
                    item[primaryKey],
                    item
                )
        }
    }
    return options.inplace ? source : [...mapSource.values()]
}
  
/**
 * 
 * @param source 
 * @param updated 
 */
function shallowMerge(source, updated, options = defaultOptions) {
    options = Object.assign({}, defaultOptions, options)

    if(!Array.isArray(source) || !Array.isArray(updated)) {
        throw new TypeError('传入的前两个参数必须是数组')
    }

    const lenSource = source.length

    const lenUpdated = updated.length

    if(!lenSource) return updated

    if(!lenUpdated) return options.inplace ? source : source.concat()

    return baseShallowMerge(source, updated, options)
}

function transformObjectToMap(obj, primaryKey) {
    if(!(Array.isArray(obj) || isPlainObject(obj))){
        throw new TypeError('传入的参数必须是数组或者对象');
    }

    return Object.values(obj).reduce((map, next) => (map.set(next[primaryKey], next), map), new Map())
}

function isPlainObject(obj) {
    if(typeof obj !== 'object' || obj === null) return false
    let proto = obj
    while(Object.getPrototypeOf(proto) !== null ){
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
}

console.log(
    shallowMerge(source, updated)
)
