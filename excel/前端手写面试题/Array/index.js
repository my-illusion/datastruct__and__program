function isValidIndex(arr, i) {
    return !!( arr.length && ( i >= 0 && i < arr.length ) )
}

function last() {
    const len = this.length
    return len < 1 ? void 0 : this[len - 1]
}

function swap(i, j) {
    if(!isValidIndex(this, i) || !isValidIndex(this, j)) {
        console.error(`index ${i} or ${j} may not be a valid Index (out of range)`)
        return
    }

    this[i] = this[i] ^ this[j];
    this[j] = this[i] ^ this[j];     
    this[i] = this[i] ^ this[j]; 
}

function front() {
    const len = this.length
    return len > 0 ? this[0] : undefined
}

function back() {
    const len = this.length
    return len > 0 ? this[len - 1] : undefined
}

function max(...args) {
    return Math.max.apply(null, args.map(i => this[i]))
}

function sum(fn = (a, b) => a + b) {
    return this.reduce(fn)
}

const availableMethods = {
    last,
    swap,
    max,
    front,
    back
}

/** object methods */

function getPath(path) {
    if(path === void 0) return this

    console.log(this)
}

const availableObjMethods = {
    getPath
}

function optionalInject(methods) {
    methods.forEach(method => {
        if(availableMethods[method]) {
            Array.prototype[method] = availableMethods[method]
        }else{
            console.warn(`method ${method} has not been supported injecting~`)
        }
    })
}

function injectAll() {
    Object.keys(availableMethods).forEach(method => {
        Array.prototype[method] = availableMethods[method]
    }) 

    Object.keys(availableObjMethods).forEach(method => {
        Object.prototype[method] = availableObjMethods[method]
    })
}

const ArrayInjector = {
    optionalInject,
    injectAll
}

injectAll()

const str = { name: 'xiao gang' }
console.log(this.getPath('name'))

// export {
//     injectAll,
//     optionalInject
// }

// export default ArrayInjector