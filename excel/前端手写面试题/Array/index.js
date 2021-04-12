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

function front(){

}

function max(...args) {
    return Math.max.apply(null, args.map(i => this[i]))
}

function sum() {

}

function average() {

}




const availableMethods = {
    last,
    swap,
    max
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
}

const ArrayInjector = {
    optionalInject,
    injectAll
}

injectAll()

const str = [1, 0, 3, 4]

console.log( str.max(0, 1, 2) )

// export {
//     injectAll,
//     optionalInject
// }

// export default ArrayInjector