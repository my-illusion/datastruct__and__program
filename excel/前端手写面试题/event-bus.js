// class EventEmitter {
//     constructor(){
//         this.events = new Map()
//     }

//     addEventListener(event, fn){
//         if(this.events.has(event)){
//             const eventQueue = this.events.get(event)
//             this.events.set(event, [...eventQueue, fn])
//         }else{
//             this.events.set(event, [fn])
//         }
//     }

//     removeEventListener(event, fn){
//         const queue = this.events.get(event)

//         if(!queue) return

//         if(!fn) {
//             // clear all
//             this.events.set(event, [])
//         }else{
//             this.events.set(event, queue.filter(f => f !== fn && f.callback !== fn))
//         }
//     }

//     emit(event, ...args) {
//         const queue = this.events.get(event)
//         if(!queue) return

//         queue.forEach(fn => {
//             fn(...args)
//         })
//     }

//     once(event, fn) {
//         const that = this
//         function wrapper(...args) {
//             fn(...args)
//             that.removeEventListener(event, wrapper)
//         }

//         wrapper.callback = fn

//         this.addEventListener(event, wrapper)
//     }
// }

class EventEmitter {
    constructor(options){
        this.options = options

        this.events = new Map()
    }

    addEventListener(event, fn) {
        const queue = this.events.get(event)
        if(queue) {
            this.events.set(event, [...queue, fn])
        }else{
            this.events.set(event, [fn])
        }
    }

    removeEventListener(event, fn) {
        const queue = this.events.get(event)
        if(!queue) return

        if(!fn) {
            this.events.set(event, [])
            return
        }

        this.events.set(event, queue.filter(cb => cb !== fn && cb.callback !== fn))
    }

    once(event, fn) {
        const that = this
        function wrappers(...args) {
            fn(...args)
            that.removeEventListener(event, wrappers)
        }

        wrappers.callback = fn
        this.addEventListener(event, wrappers)
    }

    emit(event, ...args) {
        const queue = this.events.get(event)
        if(!queue) return
        queue.forEach(fn => fn(...args))
    }
}

const emitter = new EventEmitter()

function test(){
    console.log('触发了!!!')
}

emitter.addEventListener('click', test)

// emitter.removeEventListener('click', test)

emitter.emit('click')

function handleOnce() {
    console.log('once')
}

emitter.once('move', handleOnce)

emitter.removeEventListener('move', handleOnce)

emitter.emit('move')

emitter.emit('move')

// emitter.emit('move')
