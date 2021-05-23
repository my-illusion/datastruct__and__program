function myNew(fn, ...args) {
    const obj = Object.create(null);

    const result = fn.apply(obj, args)

    if( result !== null &&( typeof result === 'object' || typeof result === 'function') ) {
        return result
    }else{
        return obj
    }
}