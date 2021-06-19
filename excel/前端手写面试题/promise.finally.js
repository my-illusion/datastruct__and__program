Promise.prototype.myFinally = function (cb) {
    return this.then(
        value => Promise.resolve(cb()).then(() => value),
        error => Promise.resolve(cb()).then(() => { throw new Error(error) })
    )
} 

Promise.resolve(2)
    .then(data => {
        console.log(data)
    })
    .myFinally(() => {
        console.log('执行了')
    })