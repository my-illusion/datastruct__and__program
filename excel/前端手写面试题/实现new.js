function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype);

    const result = fn.apply(obj, args)

    if( result !== null &&( typeof result === 'object' || typeof result === 'function') ) {
        return result
    }else{
        return obj
    }
}

function create(fn) {
    function F(){}
    F.prototype = fn
    return new F()
}