/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    const result = []
    
    const len1 = num1.length
    const len2 = num2.length
    
    if(!len1) return num2
    if(!len2) return num1

    let i = len1 - 1, j = len2 - 1;
    let add = 0;

    while(i >= 0 && j >= 0) {
        const sum = +num1[i] + +num2[j] + add
        // 求进位
        add = (sum / 10) | 0
        // 得到该位的数值
        result.unshift(sum % 10)
        i--
        j--
    }

    while(i >= 0) {
        const sum = +num1[i] + add
        add = (sum / 10) | 0
        // 得到该位的数值
        result.unshift(sum % 10)
        i--
    }

    while(j >= 0) {
        const sum = +num2[j] + add
        add = (sum / 10) | 0
        // 得到该位的数值
        result.unshift(sum % 10)
        j--
    }
    if(add) result.unshift(add)

    return result.join('')
};