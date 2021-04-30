class EventEmitter {
    constructor(){
        this.events = new Map()
    }

    addEventListener(event, fn){
        if(this.events.has(event)){
            const eventQueue = this.events.get(event)
            this.events.set(event, [...eventQueue, fn])
        }else{
            this.events.set(event, [fn])
        }
    }

    removeEventListener(event, fn){
        const queue = this.events.get(event)

        if(!queue) return

        if(!fn) {
            // clear all
            this.events.set(event, [])
        }else{
            this.events.set(event, queue.filter(f => f !== fn))
        }
    }

    emit(event, ...args) {
        const queue = this.events.get(event)
        if(!queue) return

        queue.forEach(fn => {
            fn(...args)
        })
    }

    once(event, fn) {
        const that = this
        function wrapper(...args) {
            fn(...args)
            that.removeEventListener(event, wrapper)
        }

        this.addEventListener(event, wrapper)
    }
}

const emitter = new EventEmitter()

function test(){
    console.log('触发了!!!')
}

emitter.addEventListener('click', test)

emitter.removeEventListener('click', test)

emitter.emit('click')

emitter.once('move', () => { console.log('once') })

emitter.emit('move')

emitter.emit('move')

emitter.emit('move')
