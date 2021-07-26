Promise.__proto__.myRace = function(arr) {
    const len = arr.length

    if(len < 1) return Promise.resolve([])

    return new Promise((resolve, reject) => {
        for(let i = 0; i < len; i++) {
            Promise.resolve(arr[i])
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                }) 
        }
    })
}

function resolvePromise(promise2, x, resolve, reject){
    if(x === promise2){
      return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then;
        if (typeof then === 'function') { 
          then.call(x, y => {
            if(called)return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          }, err => {
            if(called)return;
            called = true;
            reject(err);
          })
        } else {
          resolve(x);
        }
      } catch (e) {
        if(called)return;
        called = true;
        reject(e); 
      }
    } else {
      resolve(x);
    }
  }

  function resolve(promise2, x, resolve, reject) {
      if(promise2 === x) {
          throw new Error('存在循环引用')
      }
      let called
      if(x !== null && typeof x === 'object' || typeof x === 'function'){
        try {
            const then = x.then
            if(typeof then === 'function') {
                then.call(x,
                    y => {
                        if(called)return;
                        called = true;
                        resolve(promise2, y, resolve, reject);
                    },
                    err => {
                        if(called) return
                        called = true
                        reject(err)
                    })
            }else{
                resolve(x)
            }
        }catch(err) {
            if(called) return
            called = true
            reject(err)
        }
      }else{
         resolve(x)
      }
  }