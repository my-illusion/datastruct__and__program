function spiralOrder(matrix) {
    const result = []

    const m = matrix.length

    const n = matrix[0].length

    let i = 0, j = 0;

    while(true) {
        while(j + 1 < n && matrix[i][j+1] !== 1000) {
            result.push(matrix[i][j])
            matrix[i][j] = 1000
            j++
        }
        while(i + 1 < m && matrix[i+1][j] !== 1000) {
            result.push(matrix[i][j])
            matrix[i][j] = 1000
            i++
        }
        while(j - 1 >= 0 && matrix[i][j-1] !== 1000) {
            result.push(matrix[i][j])
            matrix[i][j] = 1000
            j--
        }
        while(i - 1 >= 0 && matrix[i-1][j] !== 1000) {
            result.push(matrix[i][j])
            matrix[i][j] = 1000
            i--
        }

        if(result.length === n * m - 1) {
            result.push(matrix[i][j])
            break
        }
    }
    return result
}