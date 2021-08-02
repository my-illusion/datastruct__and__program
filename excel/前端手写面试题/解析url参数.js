function parseParam(url) {
    if(!url) return {}
    // 首先判断是否有参数字段
    const index = url.indexOf("?")

    if(index < 0) return {}

    const paramsString = url.slice(index + 1)

    if(!paramsString) return {}

    const params = paramsString.split('&')

    const result = {}

    params.forEach(param => {

        if(/=/.test(param)){

            let [key, value] = param.split('=')

            value = decodeURIComponent(value)

            if(/^\d+$/.test(value)) value = parseFloat(value)

            if(result.hasOwnProperty(key)) {

                result[key] = [].concat(result[key], value)
                
            }else{

                result[key] = value

            }

        }else{

            result[param] = true

        }

    })

    return result
}

console.log(
    parseParam(
        'xx?a'
    )
)