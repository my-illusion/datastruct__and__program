function addStrings(num1, num2) {
    const len1 = num1.length
    const len2 = num2.length

    if(!len1) return num2

    if(!len2) return num1

    let i = num1.length - 1
    let j = num2.length - 1

    const result = []
    let add = 0
    while(i >= 0 && j >= 0) {
        const a = +num1[i]
        const b = +num2[j]

        const sum = a + b + add

        if(sum >= 10) {
            add = (sum / 10) | 0
            const left = sum % 10
            result.unshift(left)
           
        }else{
            add = 0
            result.unshift(sum)
        }
        i--
        j--
    }

    while(i >= 0) {
        const sum = +num1[i] + add

        add = (sum / 10) | 0

        result.unshift(sum % 10)

        i--
    }

    while(j >= 0) {
        const sum = +num2[j] + add

        add = (sum / 10) | 0

        result.unshift(sum % 10)
        
        j--
    }

    if(add) result.unshift(add)

    return result.join("")
}

console.log(
    addStrings(
        '11',
        '123'
    )
)