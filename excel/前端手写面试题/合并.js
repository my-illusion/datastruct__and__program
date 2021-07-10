const source = [
    {
        id: 1, friend: ['Alice']
    },
    {
        id: 2, friend: []
    },
    {
        id: 3, friend: ['blob', 'mary']
    }
]

const pending = [
    {
        id: 1, friend: ['jack']
    },
    {
        id: 4, friend: ['may']
    },
    {
        id: 3, friend: ['dog']
    }
]

function merge(source, pending) {
    
}

function transformObjectToMap(obj) {
    if(!(Array.isArray(obj) || isPlainObject(obj))){
        throw new TypeError('传入的参数必须是数组或者对象');
    }

    
}

function isPlainObject(obj) {
    if(typeof obj !== 'object' || obj === null) return false
    let proto = obj
    while(Object.getPrototypeOf(proto) !== null ){
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
}
