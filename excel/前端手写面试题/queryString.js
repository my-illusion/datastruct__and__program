const defaultOptions = {
    decode: true,
    parseNumber: true,
    parseBoolean: true,
    mergeWhenDuplicate: false
}

function shouldParseNumber(value, options) {
    return options.parseNumber && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')
}

function shouldParseBoolean(value, options) {
    return options.parseBoolean && value !== null && ( value.toLowerCase() === 'true' ||  value.toLowerCase() === 'false')
}

function queryString(query, options) {
    if(!query) return {}

    if(typeof query !== 'string') {
        throw new TypeError('传入的参数必须是合法的url查询字符串~')
    }

    const index = query.indexOf('?')

    if(index !== -1) {

        const queryString = query.slice(index + 1)

        if(!queryString) return {}

        const queryList = queryString.split("&")

        const result = {}

        options = Object.assign({}, defaultOptions, options)

        queryList.forEach(item => {
            if(!item) return
            let [key, value] = item.split('=')

            value = value === undefined ? null : value

            if(options.decode) value = decodeURIComponent(value)

            if(shouldParseNumber(value, options)) value = Number(value)

            if(shouldParseBoolean(value, options)) value = value.toLowerCase() === 'true'

            if(result[key] && !options.mergeWhenDuplicate) {
                result[key] = [].concat(result[key], value)
            }else{
                result[key] = value
            }
        })

        return result
    }

    return {}
}



function getUrlParam(sUrl, sKey) {
    const index = sUrl.indexOf('?')
    if(index !== -1) {
        // 去除hash函数
        sUrl = sUrl.replace(/#.*/, '')
        const paramsStr = sUrl.slice(index + 1)
        
        const params = {}
        
        const paramsList = paramsStr.split('&')
        
        paramsList.forEach(param => {
            if(!param) return
            let [key, value] = param.split('=')
            if(params[key]) {
                params[key] = [].concat(params[key], value)
            }else{
                params[key] = value
            }
        })
        return sKey ? params[sKey] : params
    }
     return sKey ? '' : {}
 }

//  console.log(
//     getUrlParam(
//         'http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe'
//     )
//  )

function rgb2hex(sRGB) {
    const regExp = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/g
    
    sRGB = sRGB.trim()
    
    if(regExp.test(sRGB)) {
        let result = '#'
        sRGB.replace(regExp, (_, r, g, b) => {
            result += (+r).toString(16) + (+g).toString(16) + (+b).toString(16)
        })
        return result
    }
    return sRGB
}


console.log(
    rgb2hex('rgb(255,255,100)')
)