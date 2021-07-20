// 节流的实现有三种
// 分别是计时器 、时间戳 以及两者的结合

// 计时器版本

function throttle(fn, delay) {
    let timer = null
    return function () {
        var context = this
        var args = arguments

        if(timer) return
        timer = setTimeout(() => {
            fn.apply(context, args)
            timer = null
        }, delay) 
    }
}

// 时间戳版本
function  throttle(fn, delay){
    let timestamp = 0
    return function () {
        var context = this
        var args  = arguments

        const now = Date.now()

        if(now - timestamp >= delay) {
            fn.apply(context, args)
            timestamp = Date.now()
        }
    }
}

// 组合的版本
function throttle(fn, delay) {
    let timer = null
    let startTime = 0
    return function () {
        var context = this
        var args = arguments

        const curTime = Date.now()
        let remainning = delay - (curTime - startTime)
        
        if(timer) clearTimeout(timer)
        if(remainning <= 0) {
            fn.apply(context, args)
            startTime = Date.now()
        }else{
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, remainning)
        }
    }
}

function throttle(fn, delay) {
    let startTime = Date.now()
    let timer = null

    return function () {
        const context = this
        const args = arguments

        const curTime = Date.now()
        const remainning = delay - (curTime - startTime)

        if(timer) {
            clearTimeout(timer)
        }

        if(remainning <= 0) {
            fn.apply(context, args)
            startTime = Date.now()
        }else{
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, remainning)
        }
    }
}
