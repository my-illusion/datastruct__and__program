// 考察函数柯里化的写法

// function curry(fn) {
//     return function temp () {
//         return arguments.length < fn.length ? (...args) => temp(...arguments, ...args) : fn(...arguments)
//     }
// }




// function add(a, b, c) {
//     return a + b + c
// }

// const curryAdd = curry(add)

// console.log(curryAdd(1)(2)(3))

// 实现 add(1)(2)(3)()
// function curry(fn) {
//     var args = []
//     return function temp() {
//         return !arguments.length ? fn(...args) : (args.push(...arguments), temp)
//     }
// }

// function add(...args) {
//     return args.reduce((a, b) => a + b)
// }

// const curryAdd = curry(add)
// console.log(curryAdd(1)(2)(3)(4)())


function add(a) {
    var temp = function(b) {
        a += b
        return temp
    }
    temp.toString = function() {
        return a
    }
    return temp
}

console.log(
    add(1)(2)(3) + 1
 )