// 给定有一个 Add 函数，要支持以下形式的调用
// Add(1)(2)(3).sumOf() 输出 6; 
// Add(1,2)(3)(4).sumOf() 输出 10; 
// Add(1,2,...)(3)(4)(...).sumOf();  // ...


// function Add() {
//     const args = Array.prototype.slice.call(arguments)

//     var sum = function() {
//         args.concat(Array.prototype.slice.call(arguments))
//     }

//     sum.sumOf = function() {
//         return args.reduce((a, b) => a + b)
//     }

//     return sum
// }


function test() {
    let a = 1
    // console.log(this)
    const foo = () => {
        console.log(this === global)
        // console.log(a)
    }

    return foo
}

test()()

// str = '123'
// str.substring()

console.log(
    String.fromCharCode(97)
)