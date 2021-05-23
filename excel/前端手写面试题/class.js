class A {
    x = 3

}

class B extends A {
    constructor(props) {
        // super(props)
        // console.log(this.x)
        // super.x = 1
        // console.log(super.x)
        // console.log(this.x)
    }
}

// const obj = new A()

// B.apply(obj, ...args)

new B()

// const proto = {}
// const receiver = {}
// Reflect.set(proto, 'x', 1, receiver)


// console.log(proto, receiver)