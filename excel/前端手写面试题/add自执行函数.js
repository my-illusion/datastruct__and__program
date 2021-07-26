// 实现 add(1)(2)(3)


function add(a) {
    let num = function (b) {
        a = a + b
        return num
    }

    num.toString = function() {
        return a
    }

    return num
}

console.log(
    add(1)(2)(3)
)