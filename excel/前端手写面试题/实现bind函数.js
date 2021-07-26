Function.prototype.myBind = function() {
    const fn = this
    const context = arguments[0]
    const args = Array.prototype.slice.call(arguments, 1)

    var fnBound = function () {
        return fn.apply(this instanceof fnBound ? this : context, args.concat(
            Array.prototype.slice.call(arguments)
        ))
    }

    if(fn.prototype) {
        fnBound.prototype = Object.create(fn.prototype)
    }

    return fnBound
}