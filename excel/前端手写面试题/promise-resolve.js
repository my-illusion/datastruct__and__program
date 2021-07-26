Promise.resolve = function(value) {
    if(value instanceof Promise) {
        return value
    }
    return new Promise((resolve) => resolve(value))
}

Promise.reject = function(value) {
    return new Promise((resolve, reject) => reject(value))
}