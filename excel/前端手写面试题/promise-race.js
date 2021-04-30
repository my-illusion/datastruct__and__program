Promise.__proto__.myRace = function(arr) {
    const len = arr.length

    if(len < 1) return Promise.resolve()

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