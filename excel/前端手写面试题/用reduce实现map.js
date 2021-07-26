Array.prototype.myMap = function(fn) {
    return this.reduce((a, b, index) => a.concat(fn(b, index, this)), [])
}

const arr = [1, 2, 3]
console.log(
    arr.myMap((item) => item + 1)
)