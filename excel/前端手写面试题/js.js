var foo = function(...args) {
    // 实现函数体
    const pending = [...args]
    var temp
    temp = function(...nextArgs) {
        pending.push(...nextArgs)
        return temp
    }
    temp.getValue = function() {
        return pending.reduce((a, b) => a + b)
    }
    return temp
}

var f1 = foo(1,2,3)
console.log(f1.getValue())

var f2 = foo(1)(2,3)
console.log(f2.getValue())

var f3 = foo(1)(2)(3)(4)
console.log(f3.getValue())



var a = 1

function test() {
    console.log(a)
}

function wrapper(fn) {
    a = 2
    fn()

    function a() {

    }
}

wrapper(test)