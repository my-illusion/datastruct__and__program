function compose() {
    const chain = [...arguments]

    if(!chain.length) return (args) => args

    if(chain.length === 1) return (...args) => chain[0](...args)

    return chain.reduce(function(a, b){
        return function() {
            return a(b.apply(undefined, arguments))
        }
    })
}

console.log(
    compose((a) => a + 1, (a) => a + 1, (a) => a + 1)(1)
)