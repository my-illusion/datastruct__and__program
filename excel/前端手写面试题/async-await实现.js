function _asyncToGenerator(fn) {
    return function(){
        var self = this, args = arguments
        return new Promise((resolve, reject) => {
            var gen = fn.apply(self, args)

            function _next(value){
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
            }

            function _throw(err){
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
            }

            _next(undefined)
        })
    }
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, value) {
    try {
        var info = gen[key](value)
        var value = info.value
    }catch(err){
        reject(err)
        return
    }

    if(info.done) {
        resolve(value)
    }else{
        Promise.resolve(value).then(_next, _throw)
    }
}