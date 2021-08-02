const people = {
    name: 'xiaoming',
    age: 14
}

const proxy = new Proxy(people, {
    get(target, key) {
        if(key in target) {
            return Reflect.get(target,  key)
        }else{
            throw new Error(`key ${key} does not exist in target`)
        }
    }
})

console.log(proxy.age)
console.log(proxy.grade)