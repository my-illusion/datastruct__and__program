function letterCombinations(digits) {
    const result = []
    const path = []

    const lettersMap = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ]

    backtracking(digits, 0, path, result, lettersMap)

    return result
}

function backtracking(digits, index, path, result, lettersMap) {
    if(index === digits.length) {
        result.push(path.join(""))
        return
    }

    const list = lettersMap[digits[index] - '0']

    for(let i = 0; i < list.length; i++) {
        path.push(list[i])
        backtracking(digits, index + 1, path, result, lettersMap)
        path.pop()
    }
}

console.log(
    letterCombinations("23")
)