function PromiseLimit(urls, handler, limit = 3) {
    if(urls.length <= limit){
        return Promise.all(urls.map(url => handler(url)))
    }

    let promises = urls.splice(0, limit).map((url, index) => {
        return handler(url).then(() => index)
    })

    let p = Promise.race(promises)
    for(let i = 0; i < urls.length; i++) {
        p = p.then((res) => {
            promises[res] = handler(urls[i]).then(() => res)
            return Promise.race(promises)
        })
    }
}

/*
*p = p.then(res => promises[res] = handler(urls[i]).then(() => res), Promise.race(promises))
*/