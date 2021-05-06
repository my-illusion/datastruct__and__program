const str = [1, 2, 3, 4]


Object.defineProperty(str, 0, {
    get(key) {
        console.log('获取触发!!')
        return this[key]
    },
    set(key, newValue) {
        console.log('设置触发!!')
        this[key] = newValue
    }
})

console.log(str[0])

str[0] = 2